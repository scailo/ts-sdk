[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalaryDeductionItemProspectiveInfoRequest

# Class: SalaryDeductionItemProspectiveInfoRequest

Describes the parameters that are required to retrieve the info of a prospective salary deduction item

**`Generated`**

from message Scailo.SalaryDeductionItemProspectiveInfoRequest

## Hierarchy

- `Message`\<[`SalaryDeductionItemProspectiveInfoRequest`](SalaryDeductionItemProspectiveInfoRequest.md)\>

  ↳ **`SalaryDeductionItemProspectiveInfoRequest`**

## Table of contents

### Constructors

- [constructor](SalaryDeductionItemProspectiveInfoRequest.md#constructor)

### Properties

- [refFrom](SalaryDeductionItemProspectiveInfoRequest.md#reffrom)
- [salaryId](SalaryDeductionItemProspectiveInfoRequest.md#salaryid)
- [fields](SalaryDeductionItemProspectiveInfoRequest.md#fields)
- [runtime](SalaryDeductionItemProspectiveInfoRequest.md#runtime)
- [typeName](SalaryDeductionItemProspectiveInfoRequest.md#typename)

### Methods

- [clone](SalaryDeductionItemProspectiveInfoRequest.md#clone)
- [equals](SalaryDeductionItemProspectiveInfoRequest.md#equals)
- [fromBinary](SalaryDeductionItemProspectiveInfoRequest.md#frombinary)
- [fromJson](SalaryDeductionItemProspectiveInfoRequest.md#fromjson)
- [fromJsonString](SalaryDeductionItemProspectiveInfoRequest.md#fromjsonstring)
- [getType](SalaryDeductionItemProspectiveInfoRequest.md#gettype)
- [toBinary](SalaryDeductionItemProspectiveInfoRequest.md#tobinary)
- [toJSON](SalaryDeductionItemProspectiveInfoRequest.md#tojson)
- [toJson](SalaryDeductionItemProspectiveInfoRequest.md#tojson-1)
- [toJsonString](SalaryDeductionItemProspectiveInfoRequest.md#tojsonstring)
- [equals](SalaryDeductionItemProspectiveInfoRequest.md#equals-1)
- [fromBinary](SalaryDeductionItemProspectiveInfoRequest.md#frombinary-1)
- [fromJson](SalaryDeductionItemProspectiveInfoRequest.md#fromjson-1)
- [fromJsonString](SalaryDeductionItemProspectiveInfoRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalaryDeductionItemProspectiveInfoRequest**(`data?`): [`SalaryDeductionItemProspectiveInfoRequest`](SalaryDeductionItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalaryDeductionItemProspectiveInfoRequest`](SalaryDeductionItemProspectiveInfoRequest.md)\> |

#### Returns

[`SalaryDeductionItemProspectiveInfoRequest`](SalaryDeductionItemProspectiveInfoRequest.md)

#### Overrides

Message\&lt;SalaryDeductionItemProspectiveInfoRequest\&gt;.constructor

#### Defined in

[src/salaries.scailo_pb.ts:1627](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L1627)

## Properties

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 11;

#### Defined in

[src/salaries.scailo_pb.ts:1625](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L1625)

___

### salaryId

• **salaryId**: `bigint` = `protoInt64.zero`

Stores the salary ID

**`Generated`**

from field: int64 salary_id = 10;

#### Defined in

[src/salaries.scailo_pb.ts:1618](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L1618)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/salaries.scailo_pb.ts:1634](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L1634)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/salaries.scailo_pb.ts:1632](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L1632)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalaryDeductionItemProspectiveInfoRequest"``

#### Defined in

[src/salaries.scailo_pb.ts:1633](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L1633)

## Methods

### clone

▸ **clone**(): [`SalaryDeductionItemProspectiveInfoRequest`](SalaryDeductionItemProspectiveInfoRequest.md)

Create a deep copy.

#### Returns

[`SalaryDeductionItemProspectiveInfoRequest`](SalaryDeductionItemProspectiveInfoRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalaryDeductionItemProspectiveInfoRequest`](SalaryDeductionItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`SalaryDeductionItemProspectiveInfoRequest`](SalaryDeductionItemProspectiveInfoRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalaryDeductionItemProspectiveInfoRequest`](SalaryDeductionItemProspectiveInfoRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalaryDeductionItemProspectiveInfoRequest`](SalaryDeductionItemProspectiveInfoRequest.md)\>

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
| `a` | `undefined` \| [`SalaryDeductionItemProspectiveInfoRequest`](SalaryDeductionItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`SalaryDeductionItemProspectiveInfoRequest`](SalaryDeductionItemProspectiveInfoRequest.md)\> |
| `b` | `undefined` \| [`SalaryDeductionItemProspectiveInfoRequest`](SalaryDeductionItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`SalaryDeductionItemProspectiveInfoRequest`](SalaryDeductionItemProspectiveInfoRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/salaries.scailo_pb.ts:1651](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L1651)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalaryDeductionItemProspectiveInfoRequest`](SalaryDeductionItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalaryDeductionItemProspectiveInfoRequest`](SalaryDeductionItemProspectiveInfoRequest.md)

#### Defined in

[src/salaries.scailo_pb.ts:1639](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L1639)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalaryDeductionItemProspectiveInfoRequest`](SalaryDeductionItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalaryDeductionItemProspectiveInfoRequest`](SalaryDeductionItemProspectiveInfoRequest.md)

#### Defined in

[src/salaries.scailo_pb.ts:1643](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L1643)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalaryDeductionItemProspectiveInfoRequest`](SalaryDeductionItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalaryDeductionItemProspectiveInfoRequest`](SalaryDeductionItemProspectiveInfoRequest.md)

#### Defined in

[src/salaries.scailo_pb.ts:1647](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L1647)
