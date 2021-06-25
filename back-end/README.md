# Getting Started

### Para executar este projeto execute os seguintes comandos
### `npm install`
### `npm prestart`
### `npm start`

## Rotas
## `/todo`

## **POST**

criar uma nova tarefa

body:
- description - mínimo 5 caracteres
- name - mínimo 3 caracteres
- email (validar na mailboxlayer)

RETORNO 

**code: 201**
```
{
  "message": "Successfully created"
}
```

**code: 400 (Bad request)**
```
{ 
  "message": "${field} custom message"
}
```

**code: 401 (Unauthorized)**
``` 
{ 
  "message": "Invalid email"
  "didYouMean": "${did_you_mean}"
}
```

## **GET**

Listar todas as tarefa

RETORNO

**code: 200**

```
[
  { description, name, email, changes, done}, 
  ...
]
```

## `/todo/:id`

## **POST**

Mudar status da tarefa

body:

{ adminPassword }

RETORNO 

**code: 200**

```
{
  "message": "Updated successfully"
}
```

**code: 400 (Bad Request)**

``` 
{ 
  "message": "Change limit reached"
}
```

**code: 401 (Unauthorized)**

``` 
{ 
  "message": "Invalid admin password"
}
```

**code: 404 (Not found)**

``` 
{ 
  "message": "Task not found"
}
```

## **PUT**

Atualizar uma tarefa

body:
- description - mínimo 5 caracteres
- name - mínimo 3 caracteres
- email (validar na api)

RETORNO 

**code: 200**

```
{
  "message": "Updated successfully"
}
```

**code: 400 (Bad request)**

``` 
{ 
  "message": ${field} custom message
}
```

**code: 401 (Unauthorized)**

``` 
{ 
  "message": "Invalid email"
  "didYouMean": "${did_you_mean}"
}
```

**code: 404 (Not found)**

``` 
{ 
  "message": "Task not found"
}
```


## **DELETE**

Deletar uma tarefa

RETORNO

**code: 204**

**code: 404 (Not found)**

body: 

```
{ 
  "message": "Task not found"
}
```

## `/todo/random`

## **POST**

Inserir 3 tarefas aleatórias no to-do

RETORNO

**code: 201**

body:

```
{
  "message": "Successfully created"
}
```
