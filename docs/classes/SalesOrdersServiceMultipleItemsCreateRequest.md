[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesOrdersServiceMultipleItemsCreateRequest

# Class: SalesOrdersServiceMultipleItemsCreateRequest

Describes the parameters required to add multiple items to a sales order

**`Generated`**

from message Scailo.SalesOrdersServiceMultipleItemsCreateRequest

## Hierarchy

- `Message`\<[`SalesOrdersServiceMultipleItemsCreateRequest`](SalesOrdersServiceMultipleItemsCreateRequest.md)\>

  ↳ **`SalesOrdersServiceMultipleItemsCreateRequest`**

## Table of contents

### Constructors

- [constructor](SalesOrdersServiceMultipleItemsCreateRequest.md#constructor)

### Properties

- [list](SalesOrdersServiceMultipleItemsCreateRequest.md#list)
- [salesOrderId](SalesOrdersServiceMultipleItemsCreateRequest.md#salesorderid)
- [userComment](SalesOrdersServiceMultipleItemsCreateRequest.md#usercomment)
- [fields](SalesOrdersServiceMultipleItemsCreateRequest.md#fields)
- [runtime](SalesOrdersServiceMultipleItemsCreateRequest.md#runtime)
- [typeName](SalesOrdersServiceMultipleItemsCreateRequest.md#typename)

### Methods

- [clone](SalesOrdersServiceMultipleItemsCreateRequest.md#clone)
- [equals](SalesOrdersServiceMultipleItemsCreateRequest.md#equals)
- [fromBinary](SalesOrdersServiceMultipleItemsCreateRequest.md#frombinary)
- [fromJson](SalesOrdersServiceMultipleItemsCreateRequest.md#fromjson)
- [fromJsonString](SalesOrdersServiceMultipleItemsCreateRequest.md#fromjsonstring)
- [getType](SalesOrdersServiceMultipleItemsCreateRequest.md#gettype)
- [toBinary](SalesOrdersServiceMultipleItemsCreateRequest.md#tobinary)
- [toJSON](SalesOrdersServiceMultipleItemsCreateRequest.md#tojson)
- [toJson](SalesOrdersServiceMultipleItemsCreateRequest.md#tojson-1)
- [toJsonString](SalesOrdersServiceMultipleItemsCreateRequest.md#tojsonstring)
- [equals](SalesOrdersServiceMultipleItemsCreateRequest.md#equals-1)
- [fromBinary](SalesOrdersServiceMultipleItemsCreateRequest.md#frombinary-1)
- [fromJson](SalesOrdersServiceMultipleItemsCreateRequest.md#fromjson-1)
- [fromJsonString](SalesOrdersServiceMultipleItemsCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesOrdersServiceMultipleItemsCreateRequest**(`data?`): [`SalesOrdersServiceMultipleItemsCreateRequest`](SalesOrdersServiceMultipleItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesOrdersServiceMultipleItemsCreateRequest`](SalesOrdersServiceMultipleItemsCreateRequest.md)\> |

#### Returns

[`SalesOrdersServiceMultipleItemsCreateRequest`](SalesOrdersServiceMultipleItemsCreateRequest.md)

#### Overrides

Message\&lt;SalesOrdersServiceMultipleItemsCreateRequest\&gt;.constructor

#### Defined in

[src/sales_orders.scailo_pb.ts:1324](https://github.com/scailo/ts-sdk/blob/27275fe37bc1d73ce3118f67fbe6f9695341a7f1/src/sales_orders.scailo_pb.ts#L1324)

## Properties

### list

• **list**: [`SalesOrdersServiceMultipleItemsSingleton`](SalesOrdersServiceMultipleItemsSingleton.md)[] = `[]`

List of items

**`Generated`**

from field: repeated Scailo.SalesOrdersServiceMultipleItemsSingleton list = 11;

#### Defined in

[src/sales_orders.scailo_pb.ts:1322](https://github.com/scailo/ts-sdk/blob/27275fe37bc1d73ce3118f67fbe6f9695341a7f1/src/sales_orders.scailo_pb.ts#L1322)

___

### salesOrderId

• **salesOrderId**: `bigint` = `protoInt64.zero`

Stores the sales order ID

**`Generated`**

from field: uint64 sales_order_id = 10;

#### Defined in

[src/sales_orders.scailo_pb.ts:1315](https://github.com/scailo/ts-sdk/blob/27275fe37bc1d73ce3118f67fbe6f9695341a7f1/src/sales_orders.scailo_pb.ts#L1315)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/sales_orders.scailo_pb.ts:1308](https://github.com/scailo/ts-sdk/blob/27275fe37bc1d73ce3118f67fbe6f9695341a7f1/src/sales_orders.scailo_pb.ts#L1308)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_orders.scailo_pb.ts:1331](https://github.com/scailo/ts-sdk/blob/27275fe37bc1d73ce3118f67fbe6f9695341a7f1/src/sales_orders.scailo_pb.ts#L1331)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_orders.scailo_pb.ts:1329](https://github.com/scailo/ts-sdk/blob/27275fe37bc1d73ce3118f67fbe6f9695341a7f1/src/sales_orders.scailo_pb.ts#L1329)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesOrdersServiceMultipleItemsCreateRequest"``

#### Defined in

[src/sales_orders.scailo_pb.ts:1330](https://github.com/scailo/ts-sdk/blob/27275fe37bc1d73ce3118f67fbe6f9695341a7f1/src/sales_orders.scailo_pb.ts#L1330)

## Methods

### clone

▸ **clone**(): [`SalesOrdersServiceMultipleItemsCreateRequest`](SalesOrdersServiceMultipleItemsCreateRequest.md)

Create a deep copy.

#### Returns

[`SalesOrdersServiceMultipleItemsCreateRequest`](SalesOrdersServiceMultipleItemsCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesOrdersServiceMultipleItemsCreateRequest`](SalesOrdersServiceMultipleItemsCreateRequest.md) \| `PlainMessage`\<[`SalesOrdersServiceMultipleItemsCreateRequest`](SalesOrdersServiceMultipleItemsCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesOrdersServiceMultipleItemsCreateRequest`](SalesOrdersServiceMultipleItemsCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesOrdersServiceMultipleItemsCreateRequest`](SalesOrdersServiceMultipleItemsCreateRequest.md)\>

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
| `a` | `undefined` \| [`SalesOrdersServiceMultipleItemsCreateRequest`](SalesOrdersServiceMultipleItemsCreateRequest.md) \| `PlainMessage`\<[`SalesOrdersServiceMultipleItemsCreateRequest`](SalesOrdersServiceMultipleItemsCreateRequest.md)\> |
| `b` | `undefined` \| [`SalesOrdersServiceMultipleItemsCreateRequest`](SalesOrdersServiceMultipleItemsCreateRequest.md) \| `PlainMessage`\<[`SalesOrdersServiceMultipleItemsCreateRequest`](SalesOrdersServiceMultipleItemsCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_orders.scailo_pb.ts:1349](https://github.com/scailo/ts-sdk/blob/27275fe37bc1d73ce3118f67fbe6f9695341a7f1/src/sales_orders.scailo_pb.ts#L1349)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesOrdersServiceMultipleItemsCreateRequest`](SalesOrdersServiceMultipleItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesOrdersServiceMultipleItemsCreateRequest`](SalesOrdersServiceMultipleItemsCreateRequest.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:1337](https://github.com/scailo/ts-sdk/blob/27275fe37bc1d73ce3118f67fbe6f9695341a7f1/src/sales_orders.scailo_pb.ts#L1337)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesOrdersServiceMultipleItemsCreateRequest`](SalesOrdersServiceMultipleItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrdersServiceMultipleItemsCreateRequest`](SalesOrdersServiceMultipleItemsCreateRequest.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:1341](https://github.com/scailo/ts-sdk/blob/27275fe37bc1d73ce3118f67fbe6f9695341a7f1/src/sales_orders.scailo_pb.ts#L1341)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesOrdersServiceMultipleItemsCreateRequest`](SalesOrdersServiceMultipleItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrdersServiceMultipleItemsCreateRequest`](SalesOrdersServiceMultipleItemsCreateRequest.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:1345](https://github.com/scailo/ts-sdk/blob/27275fe37bc1d73ce3118f67fbe6f9695341a7f1/src/sales_orders.scailo_pb.ts#L1345)
