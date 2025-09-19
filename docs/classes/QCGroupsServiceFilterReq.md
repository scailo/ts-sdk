[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QCGroupsServiceFilterReq

# Class: QCGroupsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.QCGroupsServiceFilterReq

## Hierarchy

- `Message`\<[`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)\>

  ↳ **`QCGroupsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](QCGroupsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](QCGroupsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](QCGroupsServiceFilterReq.md#approvedonend)
- [approvedOnStart](QCGroupsServiceFilterReq.md#approvedonstart)
- [approverRoleId](QCGroupsServiceFilterReq.md#approverroleid)
- [code](QCGroupsServiceFilterReq.md#code)
- [completedOnEnd](QCGroupsServiceFilterReq.md#completedonend)
- [completedOnStart](QCGroupsServiceFilterReq.md#completedonstart)
- [count](QCGroupsServiceFilterReq.md#count)
- [creationTimestampEnd](QCGroupsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](QCGroupsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](QCGroupsServiceFilterReq.md#entityuuid)
- [familyId](QCGroupsServiceFilterReq.md#familyid)
- [formData](QCGroupsServiceFilterReq.md#formdata)
- [isActive](QCGroupsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](QCGroupsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](QCGroupsServiceFilterReq.md#modificationtimestampstart)
- [name](QCGroupsServiceFilterReq.md#name)
- [offset](QCGroupsServiceFilterReq.md#offset)
- [sortKey](QCGroupsServiceFilterReq.md#sortkey)
- [sortOrder](QCGroupsServiceFilterReq.md#sortorder)
- [status](QCGroupsServiceFilterReq.md#status)
- [fields](QCGroupsServiceFilterReq.md#fields)
- [runtime](QCGroupsServiceFilterReq.md#runtime)
- [typeName](QCGroupsServiceFilterReq.md#typename)

### Methods

- [clone](QCGroupsServiceFilterReq.md#clone)
- [equals](QCGroupsServiceFilterReq.md#equals)
- [fromBinary](QCGroupsServiceFilterReq.md#frombinary)
- [fromJson](QCGroupsServiceFilterReq.md#fromjson)
- [fromJsonString](QCGroupsServiceFilterReq.md#fromjsonstring)
- [getType](QCGroupsServiceFilterReq.md#gettype)
- [toBinary](QCGroupsServiceFilterReq.md#tobinary)
- [toJSON](QCGroupsServiceFilterReq.md#tojson)
- [toJson](QCGroupsServiceFilterReq.md#tojson-1)
- [toJsonString](QCGroupsServiceFilterReq.md#tojsonstring)
- [equals](QCGroupsServiceFilterReq.md#equals-1)
- [fromBinary](QCGroupsServiceFilterReq.md#frombinary-1)
- [fromJson](QCGroupsServiceFilterReq.md#fromjson-1)
- [fromJsonString](QCGroupsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCGroupsServiceFilterReq**(`data?`): [`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)\> |

#### Returns

[`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)

#### Overrides

Message\&lt;QCGroupsServiceFilterReq\&gt;.constructor

#### Defined in

[src/qc_groups.scailo_pb.ts:1675](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1675)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

[src/qc_groups.scailo_pb.ts:1624](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1624)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

[src/qc_groups.scailo_pb.ts:1617](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1617)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

[src/qc_groups.scailo_pb.ts:1610](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1610)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

[src/qc_groups.scailo_pb.ts:1631](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1631)

___

### code

• **code**: `string` = `""`

The qc group code

**`Generated`**

from field: string code = 21;

#### Defined in

[src/qc_groups.scailo_pb.ts:1659](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1659)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

[src/qc_groups.scailo_pb.ts:1645](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1645)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

[src/qc_groups.scailo_pb.ts:1638](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1638)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/qc_groups.scailo_pb.ts:1540](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1540)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/qc_groups.scailo_pb.ts:1575](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1575)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/qc_groups.scailo_pb.ts:1568](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1568)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/qc_groups.scailo_pb.ts:1596](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1596)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Retrieve qc groups that are assigned to the given family ID

**`Generated`**

from field: uint64 family_id = 30;

#### Defined in

[src/qc_groups.scailo_pb.ts:1666](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1666)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/qc_groups.scailo_pb.ts:1673](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1673)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/qc_groups.scailo_pb.ts:1533](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1533)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/qc_groups.scailo_pb.ts:1589](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1589)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/qc_groups.scailo_pb.ts:1582](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1582)

___

### name

• **name**: `string` = `""`

The name of the qc group

**`Generated`**

from field: string name = 20;

#### Defined in

[src/qc_groups.scailo_pb.ts:1652](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1652)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/qc_groups.scailo_pb.ts:1547](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1547)

___

### sortKey

• **sortKey**: [`QC_GROUP_SORT_KEY`](../enums/QC_GROUP_SORT_KEY.md) = `QC_GROUP_SORT_KEY.QC_GROUP_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.QC_GROUP_SORT_KEY sort_key = 5;

#### Defined in

[src/qc_groups.scailo_pb.ts:1561](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1561)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/qc_groups.scailo_pb.ts:1554](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1554)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this qc group

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/qc_groups.scailo_pb.ts:1603](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1603)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/qc_groups.scailo_pb.ts:1682](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1682)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/qc_groups.scailo_pb.ts:1680](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1680)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QCGroupsServiceFilterReq"``

#### Defined in

[src/qc_groups.scailo_pb.ts:1681](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1681)

## Methods

### clone

▸ **clone**(): [`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md) \| `PlainMessage`\<[`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md) \| `PlainMessage`\<[`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md) \| `PlainMessage`\<[`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/qc_groups.scailo_pb.ts:1718](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1718)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)

#### Defined in

[src/qc_groups.scailo_pb.ts:1706](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1706)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)

#### Defined in

[src/qc_groups.scailo_pb.ts:1710](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1710)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCGroupsServiceFilterReq`](QCGroupsServiceFilterReq.md)

#### Defined in

[src/qc_groups.scailo_pb.ts:1714](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_groups.scailo_pb.ts#L1714)
