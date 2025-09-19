[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalaryDeductionItemHistoryRequest

# Class: SalaryDeductionItemHistoryRequest

Describes the parameters that are required to retrieve the history of the deduction record

**`Generated`**

from message Scailo.SalaryDeductionItemHistoryRequest

## Hierarchy

- `Message`\<[`SalaryDeductionItemHistoryRequest`](SalaryDeductionItemHistoryRequest.md)\>

  ↳ **`SalaryDeductionItemHistoryRequest`**

## Table of contents

### Constructors

- [constructor](SalaryDeductionItemHistoryRequest.md#constructor)

### Properties

- [refFrom](SalaryDeductionItemHistoryRequest.md#reffrom)
- [refId](SalaryDeductionItemHistoryRequest.md#refid)
- [salaryId](SalaryDeductionItemHistoryRequest.md#salaryid)
- [fields](SalaryDeductionItemHistoryRequest.md#fields)
- [runtime](SalaryDeductionItemHistoryRequest.md#runtime)
- [typeName](SalaryDeductionItemHistoryRequest.md#typename)

### Methods

- [clone](SalaryDeductionItemHistoryRequest.md#clone)
- [equals](SalaryDeductionItemHistoryRequest.md#equals)
- [fromBinary](SalaryDeductionItemHistoryRequest.md#frombinary)
- [fromJson](SalaryDeductionItemHistoryRequest.md#fromjson)
- [fromJsonString](SalaryDeductionItemHistoryRequest.md#fromjsonstring)
- [getType](SalaryDeductionItemHistoryRequest.md#gettype)
- [toBinary](SalaryDeductionItemHistoryRequest.md#tobinary)
- [toJSON](SalaryDeductionItemHistoryRequest.md#tojson)
- [toJson](SalaryDeductionItemHistoryRequest.md#tojson-1)
- [toJsonString](SalaryDeductionItemHistoryRequest.md#tojsonstring)
- [equals](SalaryDeductionItemHistoryRequest.md#equals-1)
- [fromBinary](SalaryDeductionItemHistoryRequest.md#frombinary-1)
- [fromJson](SalaryDeductionItemHistoryRequest.md#fromjson-1)
- [fromJsonString](SalaryDeductionItemHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalaryDeductionItemHistoryRequest**(`data?`): [`SalaryDeductionItemHistoryRequest`](SalaryDeductionItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalaryDeductionItemHistoryRequest`](SalaryDeductionItemHistoryRequest.md)\> |

#### Returns

[`SalaryDeductionItemHistoryRequest`](SalaryDeductionItemHistoryRequest.md)

#### Overrides

Message\&lt;SalaryDeductionItemHistoryRequest\&gt;.constructor

#### Defined in

[src/salaries.scailo_pb.ts:1576](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L1576)

## Properties

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 11;

#### Defined in

[src/salaries.scailo_pb.ts:1567](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L1567)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: int64 ref_id = 12;

#### Defined in

[src/salaries.scailo_pb.ts:1574](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L1574)

___

### salaryId

• **salaryId**: `bigint` = `protoInt64.zero`

Stores the salary ID

**`Generated`**

from field: int64 salary_id = 10;

#### Defined in

[src/salaries.scailo_pb.ts:1560](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L1560)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/salaries.scailo_pb.ts:1583](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L1583)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/salaries.scailo_pb.ts:1581](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L1581)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalaryDeductionItemHistoryRequest"``

#### Defined in

[src/salaries.scailo_pb.ts:1582](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L1582)

## Methods

### clone

▸ **clone**(): [`SalaryDeductionItemHistoryRequest`](SalaryDeductionItemHistoryRequest.md)

Create a deep copy.

#### Returns

[`SalaryDeductionItemHistoryRequest`](SalaryDeductionItemHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalaryDeductionItemHistoryRequest`](SalaryDeductionItemHistoryRequest.md) \| `PlainMessage`\<[`SalaryDeductionItemHistoryRequest`](SalaryDeductionItemHistoryRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalaryDeductionItemHistoryRequest`](SalaryDeductionItemHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalaryDeductionItemHistoryRequest`](SalaryDeductionItemHistoryRequest.md)\>

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
| `a` | `undefined` \| [`SalaryDeductionItemHistoryRequest`](SalaryDeductionItemHistoryRequest.md) \| `PlainMessage`\<[`SalaryDeductionItemHistoryRequest`](SalaryDeductionItemHistoryRequest.md)\> |
| `b` | `undefined` \| [`SalaryDeductionItemHistoryRequest`](SalaryDeductionItemHistoryRequest.md) \| `PlainMessage`\<[`SalaryDeductionItemHistoryRequest`](SalaryDeductionItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/salaries.scailo_pb.ts:1601](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L1601)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalaryDeductionItemHistoryRequest`](SalaryDeductionItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalaryDeductionItemHistoryRequest`](SalaryDeductionItemHistoryRequest.md)

#### Defined in

[src/salaries.scailo_pb.ts:1589](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L1589)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalaryDeductionItemHistoryRequest`](SalaryDeductionItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalaryDeductionItemHistoryRequest`](SalaryDeductionItemHistoryRequest.md)

#### Defined in

[src/salaries.scailo_pb.ts:1593](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L1593)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalaryDeductionItemHistoryRequest`](SalaryDeductionItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalaryDeductionItemHistoryRequest`](SalaryDeductionItemHistoryRequest.md)

#### Defined in

[src/salaries.scailo_pb.ts:1597](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L1597)
