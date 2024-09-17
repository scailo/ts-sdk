[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalaryAdditionItemHistoryRequest

# Class: SalaryAdditionItemHistoryRequest

Describes the parameters that are required to retrieve the history of the addition record

**`Generated`**

from message Scailo.SalaryAdditionItemHistoryRequest

## Hierarchy

- `Message`\<[`SalaryAdditionItemHistoryRequest`](SalaryAdditionItemHistoryRequest.md)\>

  ↳ **`SalaryAdditionItemHistoryRequest`**

## Table of contents

### Constructors

- [constructor](SalaryAdditionItemHistoryRequest.md#constructor)

### Properties

- [refFrom](SalaryAdditionItemHistoryRequest.md#reffrom)
- [refId](SalaryAdditionItemHistoryRequest.md#refid)
- [salaryId](SalaryAdditionItemHistoryRequest.md#salaryid)
- [fields](SalaryAdditionItemHistoryRequest.md#fields)
- [runtime](SalaryAdditionItemHistoryRequest.md#runtime)
- [typeName](SalaryAdditionItemHistoryRequest.md#typename)

### Methods

- [clone](SalaryAdditionItemHistoryRequest.md#clone)
- [equals](SalaryAdditionItemHistoryRequest.md#equals)
- [fromBinary](SalaryAdditionItemHistoryRequest.md#frombinary)
- [fromJson](SalaryAdditionItemHistoryRequest.md#fromjson)
- [fromJsonString](SalaryAdditionItemHistoryRequest.md#fromjsonstring)
- [getType](SalaryAdditionItemHistoryRequest.md#gettype)
- [toBinary](SalaryAdditionItemHistoryRequest.md#tobinary)
- [toJSON](SalaryAdditionItemHistoryRequest.md#tojson)
- [toJson](SalaryAdditionItemHistoryRequest.md#tojson-1)
- [toJsonString](SalaryAdditionItemHistoryRequest.md#tojsonstring)
- [equals](SalaryAdditionItemHistoryRequest.md#equals-1)
- [fromBinary](SalaryAdditionItemHistoryRequest.md#frombinary-1)
- [fromJson](SalaryAdditionItemHistoryRequest.md#fromjson-1)
- [fromJsonString](SalaryAdditionItemHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalaryAdditionItemHistoryRequest**(`data?`): [`SalaryAdditionItemHistoryRequest`](SalaryAdditionItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalaryAdditionItemHistoryRequest`](SalaryAdditionItemHistoryRequest.md)\> |

#### Returns

[`SalaryAdditionItemHistoryRequest`](SalaryAdditionItemHistoryRequest.md)

#### Overrides

Message\&lt;SalaryAdditionItemHistoryRequest\&gt;.constructor

#### Defined in

src/salaries.scailo_pb.ts:1188

## Properties

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 11;

#### Defined in

src/salaries.scailo_pb.ts:1179

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: int64 ref_id = 12;

#### Defined in

src/salaries.scailo_pb.ts:1186

___

### salaryId

• **salaryId**: `bigint` = `protoInt64.zero`

Stores the salary ID

**`Generated`**

from field: int64 salary_id = 10;

#### Defined in

src/salaries.scailo_pb.ts:1172

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/salaries.scailo_pb.ts:1195

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/salaries.scailo_pb.ts:1193

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalaryAdditionItemHistoryRequest"``

#### Defined in

src/salaries.scailo_pb.ts:1194

## Methods

### clone

▸ **clone**(): [`SalaryAdditionItemHistoryRequest`](SalaryAdditionItemHistoryRequest.md)

Create a deep copy.

#### Returns

[`SalaryAdditionItemHistoryRequest`](SalaryAdditionItemHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalaryAdditionItemHistoryRequest`](SalaryAdditionItemHistoryRequest.md) \| `PlainMessage`\<[`SalaryAdditionItemHistoryRequest`](SalaryAdditionItemHistoryRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalaryAdditionItemHistoryRequest`](SalaryAdditionItemHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalaryAdditionItemHistoryRequest`](SalaryAdditionItemHistoryRequest.md)\>

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
| `a` | `undefined` \| [`SalaryAdditionItemHistoryRequest`](SalaryAdditionItemHistoryRequest.md) \| `PlainMessage`\<[`SalaryAdditionItemHistoryRequest`](SalaryAdditionItemHistoryRequest.md)\> |
| `b` | `undefined` \| [`SalaryAdditionItemHistoryRequest`](SalaryAdditionItemHistoryRequest.md) \| `PlainMessage`\<[`SalaryAdditionItemHistoryRequest`](SalaryAdditionItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/salaries.scailo_pb.ts:1213

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalaryAdditionItemHistoryRequest`](SalaryAdditionItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalaryAdditionItemHistoryRequest`](SalaryAdditionItemHistoryRequest.md)

#### Defined in

src/salaries.scailo_pb.ts:1201

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalaryAdditionItemHistoryRequest`](SalaryAdditionItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalaryAdditionItemHistoryRequest`](SalaryAdditionItemHistoryRequest.md)

#### Defined in

src/salaries.scailo_pb.ts:1205

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalaryAdditionItemHistoryRequest`](SalaryAdditionItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalaryAdditionItemHistoryRequest`](SalaryAdditionItemHistoryRequest.md)

#### Defined in

src/salaries.scailo_pb.ts:1209
