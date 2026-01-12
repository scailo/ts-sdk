[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesQuotationsServiceMultipleItemsCreateRequest

# Class: SalesQuotationsServiceMultipleItemsCreateRequest

Describes the parameters required to add multiple items to a sales quotation

**`Generated`**

from message Scailo.SalesQuotationsServiceMultipleItemsCreateRequest

## Hierarchy

- `Message`\<[`SalesQuotationsServiceMultipleItemsCreateRequest`](SalesQuotationsServiceMultipleItemsCreateRequest.md)\>

  ↳ **`SalesQuotationsServiceMultipleItemsCreateRequest`**

## Table of contents

### Constructors

- [constructor](SalesQuotationsServiceMultipleItemsCreateRequest.md#constructor)

### Properties

- [list](SalesQuotationsServiceMultipleItemsCreateRequest.md#list)
- [salesQuotationId](SalesQuotationsServiceMultipleItemsCreateRequest.md#salesquotationid)
- [userComment](SalesQuotationsServiceMultipleItemsCreateRequest.md#usercomment)
- [fields](SalesQuotationsServiceMultipleItemsCreateRequest.md#fields)
- [runtime](SalesQuotationsServiceMultipleItemsCreateRequest.md#runtime)
- [typeName](SalesQuotationsServiceMultipleItemsCreateRequest.md#typename)

### Methods

- [clone](SalesQuotationsServiceMultipleItemsCreateRequest.md#clone)
- [equals](SalesQuotationsServiceMultipleItemsCreateRequest.md#equals)
- [fromBinary](SalesQuotationsServiceMultipleItemsCreateRequest.md#frombinary)
- [fromJson](SalesQuotationsServiceMultipleItemsCreateRequest.md#fromjson)
- [fromJsonString](SalesQuotationsServiceMultipleItemsCreateRequest.md#fromjsonstring)
- [getType](SalesQuotationsServiceMultipleItemsCreateRequest.md#gettype)
- [toBinary](SalesQuotationsServiceMultipleItemsCreateRequest.md#tobinary)
- [toJSON](SalesQuotationsServiceMultipleItemsCreateRequest.md#tojson)
- [toJson](SalesQuotationsServiceMultipleItemsCreateRequest.md#tojson-1)
- [toJsonString](SalesQuotationsServiceMultipleItemsCreateRequest.md#tojsonstring)
- [equals](SalesQuotationsServiceMultipleItemsCreateRequest.md#equals-1)
- [fromBinary](SalesQuotationsServiceMultipleItemsCreateRequest.md#frombinary-1)
- [fromJson](SalesQuotationsServiceMultipleItemsCreateRequest.md#fromjson-1)
- [fromJsonString](SalesQuotationsServiceMultipleItemsCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesQuotationsServiceMultipleItemsCreateRequest**(`data?`): [`SalesQuotationsServiceMultipleItemsCreateRequest`](SalesQuotationsServiceMultipleItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesQuotationsServiceMultipleItemsCreateRequest`](SalesQuotationsServiceMultipleItemsCreateRequest.md)\> |

#### Returns

[`SalesQuotationsServiceMultipleItemsCreateRequest`](SalesQuotationsServiceMultipleItemsCreateRequest.md)

#### Overrides

Message\&lt;SalesQuotationsServiceMultipleItemsCreateRequest\&gt;.constructor

#### Defined in

[src/sales_quotations.scailo_pb.ts:1220](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/sales_quotations.scailo_pb.ts#L1220)

## Properties

### list

• **list**: [`SalesQuotationsServiceMultipleItemsSingleton`](SalesQuotationsServiceMultipleItemsSingleton.md)[] = `[]`

List of items

**`Generated`**

from field: repeated Scailo.SalesQuotationsServiceMultipleItemsSingleton list = 11;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1218](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/sales_quotations.scailo_pb.ts#L1218)

___

### salesQuotationId

• **salesQuotationId**: `bigint` = `protoInt64.zero`

Stores the sales quotation ID

**`Generated`**

from field: uint64 sales_quotation_id = 10;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1211](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/sales_quotations.scailo_pb.ts#L1211)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1204](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/sales_quotations.scailo_pb.ts#L1204)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_quotations.scailo_pb.ts:1227](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/sales_quotations.scailo_pb.ts#L1227)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_quotations.scailo_pb.ts:1225](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/sales_quotations.scailo_pb.ts#L1225)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesQuotationsServiceMultipleItemsCreateRequest"``

#### Defined in

[src/sales_quotations.scailo_pb.ts:1226](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/sales_quotations.scailo_pb.ts#L1226)

## Methods

### clone

▸ **clone**(): [`SalesQuotationsServiceMultipleItemsCreateRequest`](SalesQuotationsServiceMultipleItemsCreateRequest.md)

Create a deep copy.

#### Returns

[`SalesQuotationsServiceMultipleItemsCreateRequest`](SalesQuotationsServiceMultipleItemsCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesQuotationsServiceMultipleItemsCreateRequest`](SalesQuotationsServiceMultipleItemsCreateRequest.md) \| `PlainMessage`\<[`SalesQuotationsServiceMultipleItemsCreateRequest`](SalesQuotationsServiceMultipleItemsCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesQuotationsServiceMultipleItemsCreateRequest`](SalesQuotationsServiceMultipleItemsCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesQuotationsServiceMultipleItemsCreateRequest`](SalesQuotationsServiceMultipleItemsCreateRequest.md)\>

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
| `a` | `undefined` \| [`SalesQuotationsServiceMultipleItemsCreateRequest`](SalesQuotationsServiceMultipleItemsCreateRequest.md) \| `PlainMessage`\<[`SalesQuotationsServiceMultipleItemsCreateRequest`](SalesQuotationsServiceMultipleItemsCreateRequest.md)\> |
| `b` | `undefined` \| [`SalesQuotationsServiceMultipleItemsCreateRequest`](SalesQuotationsServiceMultipleItemsCreateRequest.md) \| `PlainMessage`\<[`SalesQuotationsServiceMultipleItemsCreateRequest`](SalesQuotationsServiceMultipleItemsCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_quotations.scailo_pb.ts:1245](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/sales_quotations.scailo_pb.ts#L1245)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesQuotationsServiceMultipleItemsCreateRequest`](SalesQuotationsServiceMultipleItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesQuotationsServiceMultipleItemsCreateRequest`](SalesQuotationsServiceMultipleItemsCreateRequest.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:1233](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/sales_quotations.scailo_pb.ts#L1233)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesQuotationsServiceMultipleItemsCreateRequest`](SalesQuotationsServiceMultipleItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotationsServiceMultipleItemsCreateRequest`](SalesQuotationsServiceMultipleItemsCreateRequest.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:1237](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/sales_quotations.scailo_pb.ts#L1237)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesQuotationsServiceMultipleItemsCreateRequest`](SalesQuotationsServiceMultipleItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotationsServiceMultipleItemsCreateRequest`](SalesQuotationsServiceMultipleItemsCreateRequest.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:1241](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/sales_quotations.scailo_pb.ts#L1241)
