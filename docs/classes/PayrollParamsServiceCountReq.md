[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PayrollParamsServiceCountReq

# Class: PayrollParamsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.PayrollParamsServiceCountReq

## Hierarchy

- `Message`\<[`PayrollParamsServiceCountReq`](PayrollParamsServiceCountReq.md)\>

  ↳ **`PayrollParamsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](PayrollParamsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](PayrollParamsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](PayrollParamsServiceCountReq.md#approvedonend)
- [approvedOnStart](PayrollParamsServiceCountReq.md#approvedonstart)
- [approverRoleId](PayrollParamsServiceCountReq.md#approverroleid)
- [code](PayrollParamsServiceCountReq.md#code)
- [completedOnEnd](PayrollParamsServiceCountReq.md#completedonend)
- [completedOnStart](PayrollParamsServiceCountReq.md#completedonstart)
- [creationTimestampEnd](PayrollParamsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](PayrollParamsServiceCountReq.md#creationtimestampstart)
- [entityUuid](PayrollParamsServiceCountReq.md#entityuuid)
- [isActive](PayrollParamsServiceCountReq.md#isactive)
- [modificationTimestampEnd](PayrollParamsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](PayrollParamsServiceCountReq.md#modificationtimestampstart)
- [name](PayrollParamsServiceCountReq.md#name)
- [status](PayrollParamsServiceCountReq.md#status)
- [fields](PayrollParamsServiceCountReq.md#fields)
- [runtime](PayrollParamsServiceCountReq.md#runtime)
- [typeName](PayrollParamsServiceCountReq.md#typename)

### Methods

- [clone](PayrollParamsServiceCountReq.md#clone)
- [equals](PayrollParamsServiceCountReq.md#equals)
- [fromBinary](PayrollParamsServiceCountReq.md#frombinary)
- [fromJson](PayrollParamsServiceCountReq.md#fromjson)
- [fromJsonString](PayrollParamsServiceCountReq.md#fromjsonstring)
- [getType](PayrollParamsServiceCountReq.md#gettype)
- [toBinary](PayrollParamsServiceCountReq.md#tobinary)
- [toJSON](PayrollParamsServiceCountReq.md#tojson)
- [toJson](PayrollParamsServiceCountReq.md#tojson-1)
- [toJsonString](PayrollParamsServiceCountReq.md#tojsonstring)
- [equals](PayrollParamsServiceCountReq.md#equals-1)
- [fromBinary](PayrollParamsServiceCountReq.md#frombinary-1)
- [fromJson](PayrollParamsServiceCountReq.md#fromjson-1)
- [fromJsonString](PayrollParamsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new PayrollParamsServiceCountReq**(`data?`): [`PayrollParamsServiceCountReq`](PayrollParamsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PayrollParamsServiceCountReq`](PayrollParamsServiceCountReq.md)\> |

#### Returns

[`PayrollParamsServiceCountReq`](PayrollParamsServiceCountReq.md)

#### Overrides

Message\&lt;PayrollParamsServiceCountReq\&gt;.constructor

#### Defined in

[src/payroll_params.scailo_pb.ts:843](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L843)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

[src/payroll_params.scailo_pb.ts:806](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L806)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

[src/payroll_params.scailo_pb.ts:799](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L799)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

[src/payroll_params.scailo_pb.ts:792](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L792)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

[src/payroll_params.scailo_pb.ts:813](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L813)

___

### code

• **code**: `string` = `""`

The payroll param code

**`Generated`**

from field: string code = 21;

#### Defined in

[src/payroll_params.scailo_pb.ts:841](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L841)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

[src/payroll_params.scailo_pb.ts:827](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L827)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

[src/payroll_params.scailo_pb.ts:820](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L820)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/payroll_params.scailo_pb.ts:757](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L757)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/payroll_params.scailo_pb.ts:750](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L750)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/payroll_params.scailo_pb.ts:778](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L778)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/payroll_params.scailo_pb.ts:743](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L743)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/payroll_params.scailo_pb.ts:771](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L771)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/payroll_params.scailo_pb.ts:764](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L764)

___

### name

• **name**: `string` = `""`

The name of the payroll param

**`Generated`**

from field: string name = 20;

#### Defined in

[src/payroll_params.scailo_pb.ts:834](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L834)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this payroll param

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/payroll_params.scailo_pb.ts:785](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L785)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/payroll_params.scailo_pb.ts:850](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L850)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/payroll_params.scailo_pb.ts:848](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L848)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PayrollParamsServiceCountReq"``

#### Defined in

[src/payroll_params.scailo_pb.ts:849](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L849)

## Methods

### clone

▸ **clone**(): [`PayrollParamsServiceCountReq`](PayrollParamsServiceCountReq.md)

Create a deep copy.

#### Returns

[`PayrollParamsServiceCountReq`](PayrollParamsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`PayrollParamsServiceCountReq`](PayrollParamsServiceCountReq.md) \| `PlainMessage`\<[`PayrollParamsServiceCountReq`](PayrollParamsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`PayrollParamsServiceCountReq`](PayrollParamsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PayrollParamsServiceCountReq`](PayrollParamsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`PayrollParamsServiceCountReq`](PayrollParamsServiceCountReq.md) \| `PlainMessage`\<[`PayrollParamsServiceCountReq`](PayrollParamsServiceCountReq.md)\> |
| `b` | `undefined` \| [`PayrollParamsServiceCountReq`](PayrollParamsServiceCountReq.md) \| `PlainMessage`\<[`PayrollParamsServiceCountReq`](PayrollParamsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/payroll_params.scailo_pb.ts:880](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L880)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PayrollParamsServiceCountReq`](PayrollParamsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PayrollParamsServiceCountReq`](PayrollParamsServiceCountReq.md)

#### Defined in

[src/payroll_params.scailo_pb.ts:868](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L868)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PayrollParamsServiceCountReq`](PayrollParamsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PayrollParamsServiceCountReq`](PayrollParamsServiceCountReq.md)

#### Defined in

[src/payroll_params.scailo_pb.ts:872](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L872)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PayrollParamsServiceCountReq`](PayrollParamsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PayrollParamsServiceCountReq`](PayrollParamsServiceCountReq.md)

#### Defined in

[src/payroll_params.scailo_pb.ts:876](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L876)
