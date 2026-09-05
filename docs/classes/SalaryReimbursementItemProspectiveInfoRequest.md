[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalaryReimbursementItemProspectiveInfoRequest

# Class: SalaryReimbursementItemProspectiveInfoRequest

Describes the parameters that are required to retrieve the info of a prospective salary reimbursement item

**`Generated`**

from message Scailo.SalaryReimbursementItemProspectiveInfoRequest

## Hierarchy

- `Message`\<[`SalaryReimbursementItemProspectiveInfoRequest`](SalaryReimbursementItemProspectiveInfoRequest.md)\>

  ↳ **`SalaryReimbursementItemProspectiveInfoRequest`**

## Table of contents

### Constructors

- [constructor](SalaryReimbursementItemProspectiveInfoRequest.md#constructor)

### Properties

- [refFrom](SalaryReimbursementItemProspectiveInfoRequest.md#reffrom)
- [salaryId](SalaryReimbursementItemProspectiveInfoRequest.md#salaryid)
- [fields](SalaryReimbursementItemProspectiveInfoRequest.md#fields)
- [runtime](SalaryReimbursementItemProspectiveInfoRequest.md#runtime)
- [typeName](SalaryReimbursementItemProspectiveInfoRequest.md#typename)

### Methods

- [clone](SalaryReimbursementItemProspectiveInfoRequest.md#clone)
- [equals](SalaryReimbursementItemProspectiveInfoRequest.md#equals)
- [fromBinary](SalaryReimbursementItemProspectiveInfoRequest.md#frombinary)
- [fromJson](SalaryReimbursementItemProspectiveInfoRequest.md#fromjson)
- [fromJsonString](SalaryReimbursementItemProspectiveInfoRequest.md#fromjsonstring)
- [getType](SalaryReimbursementItemProspectiveInfoRequest.md#gettype)
- [toBinary](SalaryReimbursementItemProspectiveInfoRequest.md#tobinary)
- [toJSON](SalaryReimbursementItemProspectiveInfoRequest.md#tojson)
- [toJson](SalaryReimbursementItemProspectiveInfoRequest.md#tojson-1)
- [toJsonString](SalaryReimbursementItemProspectiveInfoRequest.md#tojsonstring)
- [equals](SalaryReimbursementItemProspectiveInfoRequest.md#equals-1)
- [fromBinary](SalaryReimbursementItemProspectiveInfoRequest.md#frombinary-1)
- [fromJson](SalaryReimbursementItemProspectiveInfoRequest.md#fromjson-1)
- [fromJsonString](SalaryReimbursementItemProspectiveInfoRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalaryReimbursementItemProspectiveInfoRequest**(`data?`): [`SalaryReimbursementItemProspectiveInfoRequest`](SalaryReimbursementItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalaryReimbursementItemProspectiveInfoRequest`](SalaryReimbursementItemProspectiveInfoRequest.md)\> |

#### Returns

[`SalaryReimbursementItemProspectiveInfoRequest`](SalaryReimbursementItemProspectiveInfoRequest.md)

#### Overrides

Message\&lt;SalaryReimbursementItemProspectiveInfoRequest\&gt;.constructor

#### Defined in

[src/salaries.scailo_pb.ts:2195](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/salaries.scailo_pb.ts#L2195)

## Properties

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 11;

#### Defined in

[src/salaries.scailo_pb.ts:2193](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/salaries.scailo_pb.ts#L2193)

___

### salaryId

• **salaryId**: `bigint` = `protoInt64.zero`

Stores the salary ID

**`Generated`**

from field: int64 salary_id = 10;

#### Defined in

[src/salaries.scailo_pb.ts:2186](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/salaries.scailo_pb.ts#L2186)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/salaries.scailo_pb.ts:2202](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/salaries.scailo_pb.ts#L2202)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/salaries.scailo_pb.ts:2200](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/salaries.scailo_pb.ts#L2200)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalaryReimbursementItemProspectiveInfoRequest"``

#### Defined in

[src/salaries.scailo_pb.ts:2201](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/salaries.scailo_pb.ts#L2201)

## Methods

### clone

▸ **clone**(): [`SalaryReimbursementItemProspectiveInfoRequest`](SalaryReimbursementItemProspectiveInfoRequest.md)

Create a deep copy.

#### Returns

[`SalaryReimbursementItemProspectiveInfoRequest`](SalaryReimbursementItemProspectiveInfoRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalaryReimbursementItemProspectiveInfoRequest`](SalaryReimbursementItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`SalaryReimbursementItemProspectiveInfoRequest`](SalaryReimbursementItemProspectiveInfoRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalaryReimbursementItemProspectiveInfoRequest`](SalaryReimbursementItemProspectiveInfoRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalaryReimbursementItemProspectiveInfoRequest`](SalaryReimbursementItemProspectiveInfoRequest.md)\>

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
| `a` | `undefined` \| [`SalaryReimbursementItemProspectiveInfoRequest`](SalaryReimbursementItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`SalaryReimbursementItemProspectiveInfoRequest`](SalaryReimbursementItemProspectiveInfoRequest.md)\> |
| `b` | `undefined` \| [`SalaryReimbursementItemProspectiveInfoRequest`](SalaryReimbursementItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`SalaryReimbursementItemProspectiveInfoRequest`](SalaryReimbursementItemProspectiveInfoRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/salaries.scailo_pb.ts:2219](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/salaries.scailo_pb.ts#L2219)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalaryReimbursementItemProspectiveInfoRequest`](SalaryReimbursementItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalaryReimbursementItemProspectiveInfoRequest`](SalaryReimbursementItemProspectiveInfoRequest.md)

#### Defined in

[src/salaries.scailo_pb.ts:2207](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/salaries.scailo_pb.ts#L2207)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalaryReimbursementItemProspectiveInfoRequest`](SalaryReimbursementItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalaryReimbursementItemProspectiveInfoRequest`](SalaryReimbursementItemProspectiveInfoRequest.md)

#### Defined in

[src/salaries.scailo_pb.ts:2211](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/salaries.scailo_pb.ts#L2211)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalaryReimbursementItemProspectiveInfoRequest`](SalaryReimbursementItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalaryReimbursementItemProspectiveInfoRequest`](SalaryReimbursementItemProspectiveInfoRequest.md)

#### Defined in

[src/salaries.scailo_pb.ts:2215](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/salaries.scailo_pb.ts#L2215)
