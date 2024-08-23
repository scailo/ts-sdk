[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / SalaryReimbursementItemHistoryRequest

# Class: SalaryReimbursementItemHistoryRequest

Describes the parameters that are required to retrieve the history of the reimbursement record

**`Generated`**

from message Scailo.SalaryReimbursementItemHistoryRequest

## Hierarchy

- `Message`\<[`SalaryReimbursementItemHistoryRequest`](SalaryReimbursementItemHistoryRequest.md)\>

  ↳ **`SalaryReimbursementItemHistoryRequest`**

## Table of contents

### Constructors

- [constructor](SalaryReimbursementItemHistoryRequest.md#constructor)

### Properties

- [refFrom](SalaryReimbursementItemHistoryRequest.md#reffrom)
- [refId](SalaryReimbursementItemHistoryRequest.md#refid)
- [salaryId](SalaryReimbursementItemHistoryRequest.md#salaryid)
- [fields](SalaryReimbursementItemHistoryRequest.md#fields)
- [runtime](SalaryReimbursementItemHistoryRequest.md#runtime)
- [typeName](SalaryReimbursementItemHistoryRequest.md#typename)

### Methods

- [clone](SalaryReimbursementItemHistoryRequest.md#clone)
- [equals](SalaryReimbursementItemHistoryRequest.md#equals)
- [fromBinary](SalaryReimbursementItemHistoryRequest.md#frombinary)
- [fromJson](SalaryReimbursementItemHistoryRequest.md#fromjson)
- [fromJsonString](SalaryReimbursementItemHistoryRequest.md#fromjsonstring)
- [getType](SalaryReimbursementItemHistoryRequest.md#gettype)
- [toBinary](SalaryReimbursementItemHistoryRequest.md#tobinary)
- [toJSON](SalaryReimbursementItemHistoryRequest.md#tojson)
- [toJson](SalaryReimbursementItemHistoryRequest.md#tojson-1)
- [toJsonString](SalaryReimbursementItemHistoryRequest.md#tojsonstring)
- [equals](SalaryReimbursementItemHistoryRequest.md#equals-1)
- [fromBinary](SalaryReimbursementItemHistoryRequest.md#frombinary-1)
- [fromJson](SalaryReimbursementItemHistoryRequest.md#fromjson-1)
- [fromJsonString](SalaryReimbursementItemHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalaryReimbursementItemHistoryRequest**(`data?`): [`SalaryReimbursementItemHistoryRequest`](SalaryReimbursementItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalaryReimbursementItemHistoryRequest`](SalaryReimbursementItemHistoryRequest.md)\> |

#### Returns

[`SalaryReimbursementItemHistoryRequest`](SalaryReimbursementItemHistoryRequest.md)

#### Overrides

Message\&lt;SalaryReimbursementItemHistoryRequest\&gt;.constructor

#### Defined in

src/salaries.scailo_pb.ts:1964

## Properties

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 11;

#### Defined in

src/salaries.scailo_pb.ts:1955

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: int64 ref_id = 12;

#### Defined in

src/salaries.scailo_pb.ts:1962

___

### salaryId

• **salaryId**: `bigint` = `protoInt64.zero`

Stores the salary ID

**`Generated`**

from field: int64 salary_id = 10;

#### Defined in

src/salaries.scailo_pb.ts:1948

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/salaries.scailo_pb.ts:1971

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/salaries.scailo_pb.ts:1969

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalaryReimbursementItemHistoryRequest"``

#### Defined in

src/salaries.scailo_pb.ts:1970

## Methods

### clone

▸ **clone**(): [`SalaryReimbursementItemHistoryRequest`](SalaryReimbursementItemHistoryRequest.md)

Create a deep copy.

#### Returns

[`SalaryReimbursementItemHistoryRequest`](SalaryReimbursementItemHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalaryReimbursementItemHistoryRequest`](SalaryReimbursementItemHistoryRequest.md) \| `PlainMessage`\<[`SalaryReimbursementItemHistoryRequest`](SalaryReimbursementItemHistoryRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalaryReimbursementItemHistoryRequest`](SalaryReimbursementItemHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalaryReimbursementItemHistoryRequest`](SalaryReimbursementItemHistoryRequest.md)\>

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
| `a` | `undefined` \| [`SalaryReimbursementItemHistoryRequest`](SalaryReimbursementItemHistoryRequest.md) \| `PlainMessage`\<[`SalaryReimbursementItemHistoryRequest`](SalaryReimbursementItemHistoryRequest.md)\> |
| `b` | `undefined` \| [`SalaryReimbursementItemHistoryRequest`](SalaryReimbursementItemHistoryRequest.md) \| `PlainMessage`\<[`SalaryReimbursementItemHistoryRequest`](SalaryReimbursementItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/salaries.scailo_pb.ts:1989

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalaryReimbursementItemHistoryRequest`](SalaryReimbursementItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalaryReimbursementItemHistoryRequest`](SalaryReimbursementItemHistoryRequest.md)

#### Defined in

src/salaries.scailo_pb.ts:1977

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalaryReimbursementItemHistoryRequest`](SalaryReimbursementItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalaryReimbursementItemHistoryRequest`](SalaryReimbursementItemHistoryRequest.md)

#### Defined in

src/salaries.scailo_pb.ts:1981

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalaryReimbursementItemHistoryRequest`](SalaryReimbursementItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalaryReimbursementItemHistoryRequest`](SalaryReimbursementItemHistoryRequest.md)

#### Defined in

src/salaries.scailo_pb.ts:1985
