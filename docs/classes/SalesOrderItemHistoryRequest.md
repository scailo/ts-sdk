[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesOrderItemHistoryRequest

# Class: SalesOrderItemHistoryRequest

Describes the parameters that are required to retrieve the history of the record

**`Generated`**

from message Scailo.SalesOrderItemHistoryRequest

## Hierarchy

- `Message`\<[`SalesOrderItemHistoryRequest`](SalesOrderItemHistoryRequest.md)\>

  ↳ **`SalesOrderItemHistoryRequest`**

## Table of contents

### Constructors

- [constructor](SalesOrderItemHistoryRequest.md#constructor)

### Properties

- [familyId](SalesOrderItemHistoryRequest.md#familyid)
- [salesOrderId](SalesOrderItemHistoryRequest.md#salesorderid)
- [fields](SalesOrderItemHistoryRequest.md#fields)
- [runtime](SalesOrderItemHistoryRequest.md#runtime)
- [typeName](SalesOrderItemHistoryRequest.md#typename)

### Methods

- [clone](SalesOrderItemHistoryRequest.md#clone)
- [equals](SalesOrderItemHistoryRequest.md#equals)
- [fromBinary](SalesOrderItemHistoryRequest.md#frombinary)
- [fromJson](SalesOrderItemHistoryRequest.md#fromjson)
- [fromJsonString](SalesOrderItemHistoryRequest.md#fromjsonstring)
- [getType](SalesOrderItemHistoryRequest.md#gettype)
- [toBinary](SalesOrderItemHistoryRequest.md#tobinary)
- [toJSON](SalesOrderItemHistoryRequest.md#tojson)
- [toJson](SalesOrderItemHistoryRequest.md#tojson-1)
- [toJsonString](SalesOrderItemHistoryRequest.md#tojsonstring)
- [equals](SalesOrderItemHistoryRequest.md#equals-1)
- [fromBinary](SalesOrderItemHistoryRequest.md#frombinary-1)
- [fromJson](SalesOrderItemHistoryRequest.md#fromjson-1)
- [fromJsonString](SalesOrderItemHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesOrderItemHistoryRequest**(`data?`): [`SalesOrderItemHistoryRequest`](SalesOrderItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesOrderItemHistoryRequest`](SalesOrderItemHistoryRequest.md)\> |

#### Returns

[`SalesOrderItemHistoryRequest`](SalesOrderItemHistoryRequest.md)

#### Overrides

Message\&lt;SalesOrderItemHistoryRequest\&gt;.constructor

#### Defined in

[src/sales_orders.scailo_pb.ts:1595](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L1595)

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/sales_orders.scailo_pb.ts:1593](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L1593)

___

### salesOrderId

• **salesOrderId**: `bigint` = `protoInt64.zero`

Stores the sales order ID

**`Generated`**

from field: uint64 sales_order_id = 10;

#### Defined in

[src/sales_orders.scailo_pb.ts:1586](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L1586)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_orders.scailo_pb.ts:1602](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L1602)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_orders.scailo_pb.ts:1600](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L1600)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesOrderItemHistoryRequest"``

#### Defined in

[src/sales_orders.scailo_pb.ts:1601](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L1601)

## Methods

### clone

▸ **clone**(): [`SalesOrderItemHistoryRequest`](SalesOrderItemHistoryRequest.md)

Create a deep copy.

#### Returns

[`SalesOrderItemHistoryRequest`](SalesOrderItemHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesOrderItemHistoryRequest`](SalesOrderItemHistoryRequest.md) \| `PlainMessage`\<[`SalesOrderItemHistoryRequest`](SalesOrderItemHistoryRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesOrderItemHistoryRequest`](SalesOrderItemHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesOrderItemHistoryRequest`](SalesOrderItemHistoryRequest.md)\>

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
| `a` | `undefined` \| [`SalesOrderItemHistoryRequest`](SalesOrderItemHistoryRequest.md) \| `PlainMessage`\<[`SalesOrderItemHistoryRequest`](SalesOrderItemHistoryRequest.md)\> |
| `b` | `undefined` \| [`SalesOrderItemHistoryRequest`](SalesOrderItemHistoryRequest.md) \| `PlainMessage`\<[`SalesOrderItemHistoryRequest`](SalesOrderItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_orders.scailo_pb.ts:1619](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L1619)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesOrderItemHistoryRequest`](SalesOrderItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesOrderItemHistoryRequest`](SalesOrderItemHistoryRequest.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:1607](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L1607)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesOrderItemHistoryRequest`](SalesOrderItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrderItemHistoryRequest`](SalesOrderItemHistoryRequest.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:1611](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L1611)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesOrderItemHistoryRequest`](SalesOrderItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrderItemHistoryRequest`](SalesOrderItemHistoryRequest.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:1615](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L1615)
