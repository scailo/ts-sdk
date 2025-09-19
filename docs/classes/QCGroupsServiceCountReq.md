[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QCGroupsServiceCountReq

# Class: QCGroupsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.QCGroupsServiceCountReq

## Hierarchy

- `Message`\<[`QCGroupsServiceCountReq`](QCGroupsServiceCountReq.md)\>

  ↳ **`QCGroupsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](QCGroupsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](QCGroupsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](QCGroupsServiceCountReq.md#approvedonend)
- [approvedOnStart](QCGroupsServiceCountReq.md#approvedonstart)
- [approverRoleId](QCGroupsServiceCountReq.md#approverroleid)
- [code](QCGroupsServiceCountReq.md#code)
- [completedOnEnd](QCGroupsServiceCountReq.md#completedonend)
- [completedOnStart](QCGroupsServiceCountReq.md#completedonstart)
- [creationTimestampEnd](QCGroupsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](QCGroupsServiceCountReq.md#creationtimestampstart)
- [entityUuid](QCGroupsServiceCountReq.md#entityuuid)
- [familyId](QCGroupsServiceCountReq.md#familyid)
- [formData](QCGroupsServiceCountReq.md#formdata)
- [isActive](QCGroupsServiceCountReq.md#isactive)
- [modificationTimestampEnd](QCGroupsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](QCGroupsServiceCountReq.md#modificationtimestampstart)
- [name](QCGroupsServiceCountReq.md#name)
- [status](QCGroupsServiceCountReq.md#status)
- [fields](QCGroupsServiceCountReq.md#fields)
- [runtime](QCGroupsServiceCountReq.md#runtime)
- [typeName](QCGroupsServiceCountReq.md#typename)

### Methods

- [clone](QCGroupsServiceCountReq.md#clone)
- [equals](QCGroupsServiceCountReq.md#equals)
- [fromBinary](QCGroupsServiceCountReq.md#frombinary)
- [fromJson](QCGroupsServiceCountReq.md#fromjson)
- [fromJsonString](QCGroupsServiceCountReq.md#fromjsonstring)
- [getType](QCGroupsServiceCountReq.md#gettype)
- [toBinary](QCGroupsServiceCountReq.md#tobinary)
- [toJSON](QCGroupsServiceCountReq.md#tojson)
- [toJson](QCGroupsServiceCountReq.md#tojson-1)
- [toJsonString](QCGroupsServiceCountReq.md#tojsonstring)
- [equals](QCGroupsServiceCountReq.md#equals-1)
- [fromBinary](QCGroupsServiceCountReq.md#frombinary-1)
- [fromJson](QCGroupsServiceCountReq.md#fromjson-1)
- [fromJsonString](QCGroupsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCGroupsServiceCountReq**(`data?`): [`QCGroupsServiceCountReq`](QCGroupsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QCGroupsServiceCountReq`](QCGroupsServiceCountReq.md)\> |

#### Returns

[`QCGroupsServiceCountReq`](QCGroupsServiceCountReq.md)

#### Overrides

Message\&lt;QCGroupsServiceCountReq\&gt;.constructor

#### Defined in

[src/qc_groups.scailo_pb.ts:1849](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1849)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

[src/qc_groups.scailo_pb.ts:1798](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1798)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

[src/qc_groups.scailo_pb.ts:1791](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1791)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

[src/qc_groups.scailo_pb.ts:1784](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1784)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

[src/qc_groups.scailo_pb.ts:1805](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1805)

___

### code

• **code**: `string` = `""`

The qc group code

**`Generated`**

from field: string code = 21;

#### Defined in

[src/qc_groups.scailo_pb.ts:1833](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1833)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

[src/qc_groups.scailo_pb.ts:1819](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1819)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

[src/qc_groups.scailo_pb.ts:1812](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1812)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/qc_groups.scailo_pb.ts:1749](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1749)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/qc_groups.scailo_pb.ts:1742](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1742)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/qc_groups.scailo_pb.ts:1770](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1770)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Retrieve qc groups that are assigned to the given family ID

**`Generated`**

from field: uint64 family_id = 30;

#### Defined in

[src/qc_groups.scailo_pb.ts:1840](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1840)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/qc_groups.scailo_pb.ts:1847](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1847)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/qc_groups.scailo_pb.ts:1735](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1735)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/qc_groups.scailo_pb.ts:1763](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1763)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/qc_groups.scailo_pb.ts:1756](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1756)

___

### name

• **name**: `string` = `""`

The name of the qc group

**`Generated`**

from field: string name = 20;

#### Defined in

[src/qc_groups.scailo_pb.ts:1826](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1826)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this qc group

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/qc_groups.scailo_pb.ts:1777](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1777)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/qc_groups.scailo_pb.ts:1856](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1856)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/qc_groups.scailo_pb.ts:1854](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1854)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QCGroupsServiceCountReq"``

#### Defined in

[src/qc_groups.scailo_pb.ts:1855](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1855)

## Methods

### clone

▸ **clone**(): [`QCGroupsServiceCountReq`](QCGroupsServiceCountReq.md)

Create a deep copy.

#### Returns

[`QCGroupsServiceCountReq`](QCGroupsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`QCGroupsServiceCountReq`](QCGroupsServiceCountReq.md) \| `PlainMessage`\<[`QCGroupsServiceCountReq`](QCGroupsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`QCGroupsServiceCountReq`](QCGroupsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QCGroupsServiceCountReq`](QCGroupsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`QCGroupsServiceCountReq`](QCGroupsServiceCountReq.md) \| `PlainMessage`\<[`QCGroupsServiceCountReq`](QCGroupsServiceCountReq.md)\> |
| `b` | `undefined` \| [`QCGroupsServiceCountReq`](QCGroupsServiceCountReq.md) \| `PlainMessage`\<[`QCGroupsServiceCountReq`](QCGroupsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/qc_groups.scailo_pb.ts:1888](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1888)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCGroupsServiceCountReq`](QCGroupsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QCGroupsServiceCountReq`](QCGroupsServiceCountReq.md)

#### Defined in

[src/qc_groups.scailo_pb.ts:1876](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1876)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCGroupsServiceCountReq`](QCGroupsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCGroupsServiceCountReq`](QCGroupsServiceCountReq.md)

#### Defined in

[src/qc_groups.scailo_pb.ts:1880](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1880)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCGroupsServiceCountReq`](QCGroupsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCGroupsServiceCountReq`](QCGroupsServiceCountReq.md)

#### Defined in

[src/qc_groups.scailo_pb.ts:1884](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1884)
