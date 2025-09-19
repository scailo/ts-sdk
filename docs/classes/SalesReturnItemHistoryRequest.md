[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesReturnItemHistoryRequest

# Class: SalesReturnItemHistoryRequest

Describes the parameters that are required to retrieve the history of the record

**`Generated`**

from message Scailo.SalesReturnItemHistoryRequest

## Hierarchy

- `Message`\<[`SalesReturnItemHistoryRequest`](SalesReturnItemHistoryRequest.md)\>

  ↳ **`SalesReturnItemHistoryRequest`**

## Table of contents

### Constructors

- [constructor](SalesReturnItemHistoryRequest.md#constructor)

### Properties

- [familyId](SalesReturnItemHistoryRequest.md#familyid)
- [salesReturnId](SalesReturnItemHistoryRequest.md#salesreturnid)
- [fields](SalesReturnItemHistoryRequest.md#fields)
- [runtime](SalesReturnItemHistoryRequest.md#runtime)
- [typeName](SalesReturnItemHistoryRequest.md#typename)

### Methods

- [clone](SalesReturnItemHistoryRequest.md#clone)
- [equals](SalesReturnItemHistoryRequest.md#equals)
- [fromBinary](SalesReturnItemHistoryRequest.md#frombinary)
- [fromJson](SalesReturnItemHistoryRequest.md#fromjson)
- [fromJsonString](SalesReturnItemHistoryRequest.md#fromjsonstring)
- [getType](SalesReturnItemHistoryRequest.md#gettype)
- [toBinary](SalesReturnItemHistoryRequest.md#tobinary)
- [toJSON](SalesReturnItemHistoryRequest.md#tojson)
- [toJson](SalesReturnItemHistoryRequest.md#tojson-1)
- [toJsonString](SalesReturnItemHistoryRequest.md#tojsonstring)
- [equals](SalesReturnItemHistoryRequest.md#equals-1)
- [fromBinary](SalesReturnItemHistoryRequest.md#frombinary-1)
- [fromJson](SalesReturnItemHistoryRequest.md#fromjson-1)
- [fromJsonString](SalesReturnItemHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesReturnItemHistoryRequest**(`data?`): [`SalesReturnItemHistoryRequest`](SalesReturnItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesReturnItemHistoryRequest`](SalesReturnItemHistoryRequest.md)\> |

#### Returns

[`SalesReturnItemHistoryRequest`](SalesReturnItemHistoryRequest.md)

#### Overrides

Message\&lt;SalesReturnItemHistoryRequest\&gt;.constructor

#### Defined in

[src/sales_returns.scailo_pb.ts:1057](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_returns.scailo_pb.ts#L1057)

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/sales_returns.scailo_pb.ts:1055](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_returns.scailo_pb.ts#L1055)

___

### salesReturnId

• **salesReturnId**: `bigint` = `protoInt64.zero`

Stores the sales return ID

**`Generated`**

from field: uint64 sales_return_id = 10;

#### Defined in

[src/sales_returns.scailo_pb.ts:1048](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_returns.scailo_pb.ts#L1048)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_returns.scailo_pb.ts:1064](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_returns.scailo_pb.ts#L1064)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_returns.scailo_pb.ts:1062](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_returns.scailo_pb.ts#L1062)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesReturnItemHistoryRequest"``

#### Defined in

[src/sales_returns.scailo_pb.ts:1063](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_returns.scailo_pb.ts#L1063)

## Methods

### clone

▸ **clone**(): [`SalesReturnItemHistoryRequest`](SalesReturnItemHistoryRequest.md)

Create a deep copy.

#### Returns

[`SalesReturnItemHistoryRequest`](SalesReturnItemHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesReturnItemHistoryRequest`](SalesReturnItemHistoryRequest.md) \| `PlainMessage`\<[`SalesReturnItemHistoryRequest`](SalesReturnItemHistoryRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesReturnItemHistoryRequest`](SalesReturnItemHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesReturnItemHistoryRequest`](SalesReturnItemHistoryRequest.md)\>

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
| `a` | `undefined` \| [`SalesReturnItemHistoryRequest`](SalesReturnItemHistoryRequest.md) \| `PlainMessage`\<[`SalesReturnItemHistoryRequest`](SalesReturnItemHistoryRequest.md)\> |
| `b` | `undefined` \| [`SalesReturnItemHistoryRequest`](SalesReturnItemHistoryRequest.md) \| `PlainMessage`\<[`SalesReturnItemHistoryRequest`](SalesReturnItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_returns.scailo_pb.ts:1081](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_returns.scailo_pb.ts#L1081)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesReturnItemHistoryRequest`](SalesReturnItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesReturnItemHistoryRequest`](SalesReturnItemHistoryRequest.md)

#### Defined in

[src/sales_returns.scailo_pb.ts:1069](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_returns.scailo_pb.ts#L1069)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesReturnItemHistoryRequest`](SalesReturnItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesReturnItemHistoryRequest`](SalesReturnItemHistoryRequest.md)

#### Defined in

[src/sales_returns.scailo_pb.ts:1073](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_returns.scailo_pb.ts#L1073)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesReturnItemHistoryRequest`](SalesReturnItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesReturnItemHistoryRequest`](SalesReturnItemHistoryRequest.md)

#### Defined in

[src/sales_returns.scailo_pb.ts:1077](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_returns.scailo_pb.ts#L1077)
