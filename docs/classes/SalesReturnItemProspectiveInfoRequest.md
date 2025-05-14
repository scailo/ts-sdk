[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesReturnItemProspectiveInfoRequest

# Class: SalesReturnItemProspectiveInfoRequest

Describes the parameters that are required to retrieve the info of a prospective sales return item

**`Generated`**

from message Scailo.SalesReturnItemProspectiveInfoRequest

## Hierarchy

- `Message`\<[`SalesReturnItemProspectiveInfoRequest`](SalesReturnItemProspectiveInfoRequest.md)\>

  ↳ **`SalesReturnItemProspectiveInfoRequest`**

## Table of contents

### Constructors

- [constructor](SalesReturnItemProspectiveInfoRequest.md#constructor)

### Properties

- [familyId](SalesReturnItemProspectiveInfoRequest.md#familyid)
- [salesReturnId](SalesReturnItemProspectiveInfoRequest.md#salesreturnid)
- [fields](SalesReturnItemProspectiveInfoRequest.md#fields)
- [runtime](SalesReturnItemProspectiveInfoRequest.md#runtime)
- [typeName](SalesReturnItemProspectiveInfoRequest.md#typename)

### Methods

- [clone](SalesReturnItemProspectiveInfoRequest.md#clone)
- [equals](SalesReturnItemProspectiveInfoRequest.md#equals)
- [fromBinary](SalesReturnItemProspectiveInfoRequest.md#frombinary)
- [fromJson](SalesReturnItemProspectiveInfoRequest.md#fromjson)
- [fromJsonString](SalesReturnItemProspectiveInfoRequest.md#fromjsonstring)
- [getType](SalesReturnItemProspectiveInfoRequest.md#gettype)
- [toBinary](SalesReturnItemProspectiveInfoRequest.md#tobinary)
- [toJSON](SalesReturnItemProspectiveInfoRequest.md#tojson)
- [toJson](SalesReturnItemProspectiveInfoRequest.md#tojson-1)
- [toJsonString](SalesReturnItemProspectiveInfoRequest.md#tojsonstring)
- [equals](SalesReturnItemProspectiveInfoRequest.md#equals-1)
- [fromBinary](SalesReturnItemProspectiveInfoRequest.md#frombinary-1)
- [fromJson](SalesReturnItemProspectiveInfoRequest.md#fromjson-1)
- [fromJsonString](SalesReturnItemProspectiveInfoRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesReturnItemProspectiveInfoRequest**(`data?`): [`SalesReturnItemProspectiveInfoRequest`](SalesReturnItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesReturnItemProspectiveInfoRequest`](SalesReturnItemProspectiveInfoRequest.md)\> |

#### Returns

[`SalesReturnItemProspectiveInfoRequest`](SalesReturnItemProspectiveInfoRequest.md)

#### Overrides

Message\&lt;SalesReturnItemProspectiveInfoRequest\&gt;.constructor

#### Defined in

src/sales_returns.scailo_pb.ts:1107

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/sales_returns.scailo_pb.ts:1105

___

### salesReturnId

• **salesReturnId**: `bigint` = `protoInt64.zero`

Stores the sales return ID

**`Generated`**

from field: uint64 sales_return_id = 10;

#### Defined in

src/sales_returns.scailo_pb.ts:1098

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_returns.scailo_pb.ts:1114

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_returns.scailo_pb.ts:1112

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesReturnItemProspectiveInfoRequest"``

#### Defined in

src/sales_returns.scailo_pb.ts:1113

## Methods

### clone

▸ **clone**(): [`SalesReturnItemProspectiveInfoRequest`](SalesReturnItemProspectiveInfoRequest.md)

Create a deep copy.

#### Returns

[`SalesReturnItemProspectiveInfoRequest`](SalesReturnItemProspectiveInfoRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesReturnItemProspectiveInfoRequest`](SalesReturnItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`SalesReturnItemProspectiveInfoRequest`](SalesReturnItemProspectiveInfoRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesReturnItemProspectiveInfoRequest`](SalesReturnItemProspectiveInfoRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesReturnItemProspectiveInfoRequest`](SalesReturnItemProspectiveInfoRequest.md)\>

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
| `a` | `undefined` \| [`SalesReturnItemProspectiveInfoRequest`](SalesReturnItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`SalesReturnItemProspectiveInfoRequest`](SalesReturnItemProspectiveInfoRequest.md)\> |
| `b` | `undefined` \| [`SalesReturnItemProspectiveInfoRequest`](SalesReturnItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`SalesReturnItemProspectiveInfoRequest`](SalesReturnItemProspectiveInfoRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_returns.scailo_pb.ts:1131

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesReturnItemProspectiveInfoRequest`](SalesReturnItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesReturnItemProspectiveInfoRequest`](SalesReturnItemProspectiveInfoRequest.md)

#### Defined in

src/sales_returns.scailo_pb.ts:1119

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesReturnItemProspectiveInfoRequest`](SalesReturnItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesReturnItemProspectiveInfoRequest`](SalesReturnItemProspectiveInfoRequest.md)

#### Defined in

src/sales_returns.scailo_pb.ts:1123

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesReturnItemProspectiveInfoRequest`](SalesReturnItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesReturnItemProspectiveInfoRequest`](SalesReturnItemProspectiveInfoRequest.md)

#### Defined in

src/sales_returns.scailo_pb.ts:1127
