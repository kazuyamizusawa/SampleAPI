# SampleAPI

- 構成図

```
SampleAPI
\---documents
    |   SampleAPI.yaml  OpenAPI3.0形式のIF定義書
    |   
    \---openAPI
        |   index.yaml
        |   package.json
        |   resolve.js
        |   
        +---component  IF定義に必要なモジュール群
        |   |   index.json
        |   |   parameters.json
        |   |   requests.json
        |   |   schemaIndex.json
        |   |   
        |   \---schema
        |       +---model
        |       |       capitalInfo.json
        |       |       countryInfo.json
        |       |       
        |       +---request
        |       \---response
        |               resCapitalInfoList.json
        |               resCountryInfoList.json
        |               
        +---info  IF定義に必要な設定値
        |       info.json
        |       servers.json
        |       tags.json
        |       
        \---path  IF定義に必要なAPI設定
            |   index.json
            |   
            +---capital
            |       list.json
            |       
            \---country
                    list.json
```



- IF定義書を見るには

Swagger Editor

https://github.com/swagger-api/swagger-editor



- IF定義書を出力するには

```
cd [カレントパス]/SampleAPI/documents/openAPI

npm install

npm run build-sample-api
※IF定義書(SampleAPI.yaml)がdocumentsに出力されます
```

