[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesOrdersServiceContactCreateRequest

# Class: SalesOrdersServiceContactCreateRequest

Describes the parameters necessary to create a sales order contact

**`Generated`**

from message Scailo.SalesOrdersServiceContactCreateRequest

## Hierarchy

- `Message`\<[`SalesOrdersServiceContactCreateRequest`](SalesOrdersServiceContactCreateRequest.md)\>

  ↳ **`SalesOrdersServiceContactCreateRequest`**

## Table of contents

### Constructors

- [constructor](SalesOrdersServiceContactCreateRequest.md#constructor)

### Properties

- [associateId](SalesOrdersServiceContactCreateRequest.md#associateid)
- [salesOrderId](SalesOrdersServiceContactCreateRequest.md#salesorderid)
- [userComment](SalesOrdersServiceContactCreateRequest.md#usercomment)
- [fields](SalesOrdersServiceContactCreateRequest.md#fields)
- [runtime](SalesOrdersServiceContactCreateRequest.md#runtime)
- [typeName](SalesOrdersServiceContactCreateRequest.md#typename)

### Methods

- [clone](SalesOrdersServiceContactCreateRequest.md#clone)
- [equals](SalesOrdersServiceContactCreateRequest.md#equals)
- [fromBinary](SalesOrdersServiceContactCreateRequest.md#frombinary)
- [fromJson](SalesOrdersServiceContactCreateRequest.md#fromjson)
- [fromJsonString](SalesOrdersServiceContactCreateRequest.md#fromjsonstring)
- [getType](SalesOrdersServiceContactCreateRequest.md#gettype)
- [toBinary](SalesOrdersServiceContactCreateRequest.md#tobinary)
- [toJSON](SalesOrdersServiceContactCreateRequest.md#tojson)
- [toJson](SalesOrdersServiceContactCreateRequest.md#tojson-1)
- [toJsonString](SalesOrdersServiceContactCreateRequest.md#tojsonstring)
- [equals](SalesOrdersServiceContactCreateRequest.md#equals-1)
- [fromBinary](SalesOrdersServiceContactCreateRequest.md#frombinary-1)
- [fromJson](SalesOrdersServiceContactCreateRequest.md#fromjson-1)
- [fromJsonString](SalesOrdersServiceContactCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesOrdersServiceContactCreateRequest**(`data?`): [`SalesOrdersServiceContactCreateRequest`](SalesOrdersServiceContactCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesOrdersServiceContactCreateRequest`](SalesOrdersServiceContactCreateRequest.md)\> |

#### Returns

[`SalesOrdersServiceContactCreateRequest`](SalesOrdersServiceContactCreateRequest.md)

#### Overrides

Message\&lt;SalesOrdersServiceContactCreateRequest\&gt;.constructor

#### Defined in

src/sales_orders.scailo_pb.ts:3002

## Properties

### associateId

• **associateId**: `bigint` = `protoInt64.zero`

Stores the associate ID

**`Generated`**

from field: uint64 associate_id = 11;

#### Defined in

src/sales_orders.scailo_pb.ts:3000

___

### salesOrderId

• **salesOrderId**: `bigint` = `protoInt64.zero`

Stores the sales order ID

**`Generated`**

from field: uint64 sales_order_id = 10;

#### Defined in

src/sales_orders.scailo_pb.ts:2993

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/sales_orders.scailo_pb.ts:2986

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_orders.scailo_pb.ts:3009

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_orders.scailo_pb.ts:3007

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesOrdersServiceContactCreateRequest"``

#### Defined in

src/sales_orders.scailo_pb.ts:3008

## Methods

### clone

▸ **clone**(): [`SalesOrdersServiceContactCreateRequest`](SalesOrdersServiceContactCreateRequest.md)

Create a deep copy.

#### Returns

[`SalesOrdersServiceContactCreateRequest`](SalesOrdersServiceContactCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesOrdersServiceContactCreateRequest`](SalesOrdersServiceContactCreateRequest.md) \| `PlainMessage`\<[`SalesOrdersServiceContactCreateRequest`](SalesOrdersServiceContactCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesOrdersServiceContactCreateRequest`](SalesOrdersServiceContactCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesOrdersServiceContactCreateRequest`](SalesOrdersServiceContactCreateRequest.md)\>

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
| `a` | `undefined` \| [`SalesOrdersServiceContactCreateRequest`](SalesOrdersServiceContactCreateRequest.md) \| `PlainMessage`\<[`SalesOrdersServiceContactCreateRequest`](SalesOrdersServiceContactCreateRequest.md)\> |
| `b` | `undefined` \| [`SalesOrdersServiceContactCreateRequest`](SalesOrdersServiceContactCreateRequest.md) \| `PlainMessage`\<[`SalesOrdersServiceContactCreateRequest`](SalesOrdersServiceContactCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_orders.scailo_pb.ts:3027

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesOrdersServiceContactCreateRequest`](SalesOrdersServiceContactCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesOrdersServiceContactCreateRequest`](SalesOrdersServiceContactCreateRequest.md)

#### Defined in

src/sales_orders.scailo_pb.ts:3015

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesOrdersServiceContactCreateRequest`](SalesOrdersServiceContactCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrdersServiceContactCreateRequest`](SalesOrdersServiceContactCreateRequest.md)

#### Defined in

src/sales_orders.scailo_pb.ts:3019

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesOrdersServiceContactCreateRequest`](SalesOrdersServiceContactCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrdersServiceContactCreateRequest`](SalesOrdersServiceContactCreateRequest.md)

#### Defined in

src/sales_orders.scailo_pb.ts:3023
