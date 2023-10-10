const request = require('supertest')('https://jsonplaceholder.typicode.com')
const chai = require('chai')
const chaiJsonSchemaAjv = require('chai-json-schema-ajv')

chai.use(chaiJsonSchemaAjv)
const { expect } = chai

const postsSchemaProperties = {
    userId: { type: 'number' },
    id:{type: "number"}, 
    title:{type:"string"},
    body:{type:"string"},
    postId:{type:"number"}
}
const postsSchema = {
    type: 'object',
    properties: postsSchemaProperties,
    required: ['id','userId','title','body']
}
const postsSchemaAll = {
    type: 'array',
    properties: postsSchemaProperties,
    required: ['id','userId','title','body']
}
const postsSchemaDelete ={
    type: 'object',
    properties: {}
}
const postsSchemaComment = {
    type: 'array',
    properties: postsSchemaProperties,
    required: ['id','userId','title','body','postId']
}


describe('Testing API Posts', function(){
    describe('PA_001 Mencoba mengambil semua data',function(){
        let result
        it('Data berhasil diambil',async function(){
            result = await request.get('/posts')
            expect(result.body).have.jsonSchema(postsSchemaAll)
        })
        it('Jumlah data nya = 100',async function(){
            expect(result.body.length).to.equal(100)
        })
        it('Status 200',async function(){
            expect(result.status).to.equal(200)
        })
    })

    describe('PA_002 Mengambil 1 data dengan id',function(){
        let result
        it('Berhasil mengambil data dengan id 1',async function(){
            result = await request.get('/posts/1')
            expect(result.body).have.jsonSchema(postsSchema)
        })
        it('Status 200',async function(){
            expect(result.status).to.equal(200)
        })
    })

    describe('PA_003 Menambahkan posts baru dengan input (title: foo, body: bar, userId: 1)',function(){
        const data ={ title: 'foo', body: 'bar',userId: 1}
        let result
        it('Data berhasil diinput',async function(){
            result = await request.post('/posts').send(data)
            expect(result.body).have.jsonSchema(postsSchema)
        })
        it('Id nya 101',async function(){
            expect(result.body.id).to.equal(101)
        })
        it('Status 201',async function(){
            expect(result.status).to.equal(201)
        })
    })

    describe('PA_004 Update data posts dengan id = 1 dan input (title: newTitle, body: newBody, userId: 5)',function(){
        const data ={ title: 'newTitle', body: 'newBody',userId: 5}
        let result
        it('Data berhasil diupdate',async function(){
            result = await request.put('/posts/1').send(data)
            expect(result.body).have.jsonSchema(postsSchema)
        })
        it('Status 200',async function(){
            expect(result.status).to.equal(200)
        })
    })

    describe('PA_005 Patching data posts dengan id = 1 dan input (title: newTitle)',function(){
        const data ={ title: 'newTitle'}
        let result
        it('Data berhasil dipatch',async function(){
            result = await request.patch('/posts/1').send(data)
            expect(result.body).have.jsonSchema(postsSchema)
        })
        it('Status 200',async function(){
            expect(result.status).to.equal(200)
        })
    })

    describe('PA_006 Delete data posts dengan id = 1 ',function(){
        let result
        it('Data berhasil dihapus',async function(){
            result = await request.delete('/posts/1')
            expect(result.body).have.jsonSchema(postsSchemaDelete)
        })
        it('Status 200',async function(){
            expect(result.status).to.equal(200)
        })
    })

    describe('PA_007 Mengambil data dengan userId = 1 ',function(){
        let result
        it('Data berhasil diambil',async function(){
            result = await request.get('/posts?userId=1')
            expect(result.body).have.jsonSchema(postsSchemaAll)
        })
        it('Jumlah data nya = 10',async function(){
            expect(result.body.length).to.equal(10)
        })
        it('Status 200',async function(){
            expect(result.status).to.equal(200)
        })
    })

    describe('PA_008 Mengambil data api comment dari api post yang memiliki postId = 1',function(){
        let result
        it('Data berhasil diambil',async function(){
            result = await request.get('/posts/1/comments')
            expect(result.body).have.jsonSchema(postsSchemaComment)
        })
        it('Jumlah data nya = 5',async function(){
            expect(result.body.length).to.equal(5)
        })
        it('Status 200',async function(){
            expect(result.status).to.equal(200)
        })
    })
})

/* async function main(){
    const res = await request.delete('/posts/1')
    console.log(res.body)
}
main() */