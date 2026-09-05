[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProductsServiceSendToStoreRequest

# Class: ProductsServiceSendToStoreRequest

Describes the parameters necessary to send a product to store

**`Generated`**

from message Scailo.ProductsServiceSendToStoreRequest

## Hierarchy

- `Message`\<[`ProductsServiceSendToStoreRequest`](ProductsServiceSendToStoreRequest.md)\>

  ↳ **`ProductsServiceSendToStoreRequest`**

## Table of contents

### Constructors

- [constructor](ProductsServiceSendToStoreRequest.md#constructor)

### Properties

- [description](ProductsServiceSendToStoreRequest.md#description)
- [id](ProductsServiceSendToStoreRequest.md#id)
- [isQcReportPublic](ProductsServiceSendToStoreRequest.md#isqcreportpublic)
- [remainingDimensions](ProductsServiceSendToStoreRequest.md#remainingdimensions)
- [shelfLifeTimestamp](ProductsServiceSendToStoreRequest.md#shelflifetimestamp)
- [storageId](ProductsServiceSendToStoreRequest.md#storageid)
- [storeId](ProductsServiceSendToStoreRequest.md#storeid)
- [userComment](ProductsServiceSendToStoreRequest.md#usercomment)
- [warrantyTimestamp](ProductsServiceSendToStoreRequest.md#warrantytimestamp)
- [fields](ProductsServiceSendToStoreRequest.md#fields)
- [runtime](ProductsServiceSendToStoreRequest.md#runtime)
- [typeName](ProductsServiceSendToStoreRequest.md#typename)

### Methods

- [clone](ProductsServiceSendToStoreRequest.md#clone)
- [equals](ProductsServiceSendToStoreRequest.md#equals)
- [fromBinary](ProductsServiceSendToStoreRequest.md#frombinary)
- [fromJson](ProductsServiceSendToStoreRequest.md#fromjson)
- [fromJsonString](ProductsServiceSendToStoreRequest.md#fromjsonstring)
- [getType](ProductsServiceSendToStoreRequest.md#gettype)
- [toBinary](ProductsServiceSendToStoreRequest.md#tobinary)
- [toJSON](ProductsServiceSendToStoreRequest.md#tojson)
- [toJson](ProductsServiceSendToStoreRequest.md#tojson-1)
- [toJsonString](ProductsServiceSendToStoreRequest.md#tojsonstring)
- [equals](ProductsServiceSendToStoreRequest.md#equals-1)
- [fromBinary](ProductsServiceSendToStoreRequest.md#frombinary-1)
- [fromJson](ProductsServiceSendToStoreRequest.md#fromjson-1)
- [fromJsonString](ProductsServiceSendToStoreRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductsServiceSendToStoreRequest**(`data?`): [`ProductsServiceSendToStoreRequest`](ProductsServiceSendToStoreRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProductsServiceSendToStoreRequest`](ProductsServiceSendToStoreRequest.md)\> |

#### Returns

[`ProductsServiceSendToStoreRequest`](ProductsServiceSendToStoreRequest.md)

#### Overrides

Message\&lt;ProductsServiceSendToStoreRequest\&gt;.constructor

#### Defined in

[src/products.scailo_pb.ts:489](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/products.scailo_pb.ts#L489)

## Properties

### description

• **description**: `string` = `""`

The description of the product

**`Generated`**

from field: string description = 60;

#### Defined in

[src/products.scailo_pb.ts:487](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/products.scailo_pb.ts#L487)

___

### id

• **id**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the target record that needs to be updated.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/products.scailo_pb.ts:438](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/products.scailo_pb.ts#L438)

___

### isQcReportPublic

• **isQcReportPublic**: `boolean` = `false`

Stores if the associated QC report should be public

**`Generated`**

from field: bool is_qc_report_public = 52;

#### Defined in

[src/products.scailo_pb.ts:473](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/products.scailo_pb.ts#L473)

___

### remainingDimensions

• **remainingDimensions**: `string` = `""`

Stores any applicable remaining dimensions as a string

**`Generated`**

from field: string remaining_dimensions = 55;

#### Defined in

[src/products.scailo_pb.ts:480](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/products.scailo_pb.ts#L480)

___

### shelfLifeTimestamp

• **shelfLifeTimestamp**: `bigint` = `protoInt64.zero`

Stores an optional shelf life as a timestamp

**`Generated`**

from field: uint64 shelf_life_timestamp = 40;

#### Defined in

[src/products.scailo_pb.ts:445](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/products.scailo_pb.ts#L445)

___

### storageId

• **storageId**: `bigint` = `protoInt64.zero`

Stores an optional ID of the associated storage that the product is stored in

**`Generated`**

from field: uint64 storage_id = 51;

#### Defined in

[src/products.scailo_pb.ts:466](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/products.scailo_pb.ts#L466)

___

### storeId

• **storeId**: `bigint` = `protoInt64.zero`

Stores the store to which the product is sent to

**`Generated`**

from field: uint64 store_id = 50;

#### Defined in

[src/products.scailo_pb.ts:459](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/products.scailo_pb.ts#L459)

___

### userComment

• **userComment**: `string` = `""`

**`Optional`**

**`Description`**

Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.

**`Example`**

```ts
"This is a comment for audit purposes."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/products.scailo_pb.ts:422](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/products.scailo_pb.ts#L422)

___

### warrantyTimestamp

• **warrantyTimestamp**: `bigint` = `protoInt64.zero`

Stores an optional warranty as a timestamp

**`Generated`**

from field: uint64 warranty_timestamp = 41;

#### Defined in

[src/products.scailo_pb.ts:452](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/products.scailo_pb.ts#L452)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/products.scailo_pb.ts:496](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/products.scailo_pb.ts#L496)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/products.scailo_pb.ts:494](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/products.scailo_pb.ts#L494)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProductsServiceSendToStoreRequest"``

#### Defined in

[src/products.scailo_pb.ts:495](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/products.scailo_pb.ts#L495)

## Methods

### clone

▸ **clone**(): [`ProductsServiceSendToStoreRequest`](ProductsServiceSendToStoreRequest.md)

Create a deep copy.

#### Returns

[`ProductsServiceSendToStoreRequest`](ProductsServiceSendToStoreRequest.md)

#### Inherited from

Message.clone

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:28

___

### equals

▸ **equals**(`other`): `boolean`

Compare with a message of the same type.
Note that this function disregards extensions and unknown fields.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`ProductsServiceSendToStoreRequest`](ProductsServiceSendToStoreRequest.md) \| `PlainMessage`\<[`ProductsServiceSendToStoreRequest`](ProductsServiceSendToStoreRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:24

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): `this`

Parse from binary data, merging fields.

Repeated fields are appended. Map entries are added, overwriting
existing keys.

If a message field is already present, it will be merged with the
new data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:38

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): `this`

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:42

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): `this`

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:46

___

### getType

▸ **getType**(): `MessageType`\<[`ProductsServiceSendToStoreRequest`](ProductsServiceSendToStoreRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProductsServiceSendToStoreRequest`](ProductsServiceSendToStoreRequest.md)\>

#### Inherited from

Message.getType

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:81

___

### toBinary

▸ **toBinary**(`options?`): `Uint8Array`

Serialize the message to binary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`BinaryWriteOptions`\> |

#### Returns

`Uint8Array`

#### Inherited from

Message.toBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:50

___

### toJSON

▸ **toJSON**(): `JsonValue`

Override for serialization behavior. This will be invoked when calling
JSON.stringify on this message (i.e. JSON.stringify(msg)).

Note that this will not serialize google.protobuf.Any with a packed
message because the protobuf JSON format specifies that it needs to be
unpacked, and this is only possible with a type registry to look up the
message type.  As a result, attempting to serialize a message with this
type will throw an Error.

This method is protected because you should not need to invoke it
directly -- instead use JSON.stringify or toJsonString for
stringified JSON.  Alternatively, if actual JSON is desired, you should
use toJson.

#### Returns

`JsonValue`

#### Inherited from

Message.toJSON

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:75

___

### toJson

▸ **toJson**(`options?`): `JsonValue`

Serialize the message to a JSON value, a JavaScript value that can be
passed to JSON.stringify().

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteOptions`\> |

#### Returns

`JsonValue`

#### Inherited from

Message.toJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:55

___

### toJsonString

▸ **toJsonString**(`options?`): `string`

Serialize the message to a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteStringOptions`\> |

#### Returns

`string`

#### Inherited from

Message.toJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:59

___

### equals

▸ **equals**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| [`ProductsServiceSendToStoreRequest`](ProductsServiceSendToStoreRequest.md) \| `PlainMessage`\<[`ProductsServiceSendToStoreRequest`](ProductsServiceSendToStoreRequest.md)\> |
| `b` | `undefined` \| [`ProductsServiceSendToStoreRequest`](ProductsServiceSendToStoreRequest.md) \| `PlainMessage`\<[`ProductsServiceSendToStoreRequest`](ProductsServiceSendToStoreRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/products.scailo_pb.ts:520](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/products.scailo_pb.ts#L520)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductsServiceSendToStoreRequest`](ProductsServiceSendToStoreRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProductsServiceSendToStoreRequest`](ProductsServiceSendToStoreRequest.md)

#### Defined in

[src/products.scailo_pb.ts:508](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/products.scailo_pb.ts#L508)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductsServiceSendToStoreRequest`](ProductsServiceSendToStoreRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductsServiceSendToStoreRequest`](ProductsServiceSendToStoreRequest.md)

#### Defined in

[src/products.scailo_pb.ts:512](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/products.scailo_pb.ts#L512)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductsServiceSendToStoreRequest`](ProductsServiceSendToStoreRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductsServiceSendToStoreRequest`](ProductsServiceSendToStoreRequest.md)

#### Defined in

[src/products.scailo_pb.ts:516](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/products.scailo_pb.ts#L516)
