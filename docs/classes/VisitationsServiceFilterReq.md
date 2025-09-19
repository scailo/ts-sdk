[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VisitationsServiceFilterReq

# Class: VisitationsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.VisitationsServiceFilterReq

## Hierarchy

- `Message`\<[`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)\>

  ↳ **`VisitationsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](VisitationsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](VisitationsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](VisitationsServiceFilterReq.md#approvedonend)
- [approvedOnStart](VisitationsServiceFilterReq.md#approvedonstart)
- [approverRoleId](VisitationsServiceFilterReq.md#approverroleid)
- [associateId](VisitationsServiceFilterReq.md#associateid)
- [completedOnEnd](VisitationsServiceFilterReq.md#completedonend)
- [completedOnStart](VisitationsServiceFilterReq.md#completedonstart)
- [count](VisitationsServiceFilterReq.md#count)
- [creationTimestampEnd](VisitationsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](VisitationsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](VisitationsServiceFilterReq.md#entityuuid)
- [entryTimestampEnd](VisitationsServiceFilterReq.md#entrytimestampend)
- [entryTimestampStart](VisitationsServiceFilterReq.md#entrytimestampstart)
- [exitTimestampEnd](VisitationsServiceFilterReq.md#exittimestampend)
- [exitTimestampStart](VisitationsServiceFilterReq.md#exittimestampstart)
- [finalRefNumber](VisitationsServiceFilterReq.md#finalrefnumber)
- [formData](VisitationsServiceFilterReq.md#formdata)
- [isActive](VisitationsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](VisitationsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](VisitationsServiceFilterReq.md#modificationtimestampstart)
- [offset](VisitationsServiceFilterReq.md#offset)
- [referenceId](VisitationsServiceFilterReq.md#referenceid)
- [sortKey](VisitationsServiceFilterReq.md#sortkey)
- [sortOrder](VisitationsServiceFilterReq.md#sortorder)
- [status](VisitationsServiceFilterReq.md#status)
- [userId](VisitationsServiceFilterReq.md#userid)
- [fields](VisitationsServiceFilterReq.md#fields)
- [runtime](VisitationsServiceFilterReq.md#runtime)
- [typeName](VisitationsServiceFilterReq.md#typename)

### Methods

- [clone](VisitationsServiceFilterReq.md#clone)
- [equals](VisitationsServiceFilterReq.md#equals)
- [fromBinary](VisitationsServiceFilterReq.md#frombinary)
- [fromJson](VisitationsServiceFilterReq.md#fromjson)
- [fromJsonString](VisitationsServiceFilterReq.md#fromjsonstring)
- [getType](VisitationsServiceFilterReq.md#gettype)
- [toBinary](VisitationsServiceFilterReq.md#tobinary)
- [toJSON](VisitationsServiceFilterReq.md#tojson)
- [toJson](VisitationsServiceFilterReq.md#tojson-1)
- [toJsonString](VisitationsServiceFilterReq.md#tojsonstring)
- [equals](VisitationsServiceFilterReq.md#equals-1)
- [fromBinary](VisitationsServiceFilterReq.md#frombinary-1)
- [fromJson](VisitationsServiceFilterReq.md#fromjson-1)
- [fromJsonString](VisitationsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new VisitationsServiceFilterReq**(`data?`): [`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)\> |

#### Returns

[`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)

#### Overrides

Message\&lt;VisitationsServiceFilterReq\&gt;.constructor

#### Defined in

[src/visitations.scailo_pb.ts:1055](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L1055)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

[src/visitations.scailo_pb.ts:969](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L969)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

[src/visitations.scailo_pb.ts:962](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L962)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

[src/visitations.scailo_pb.ts:955](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L955)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

[src/visitations.scailo_pb.ts:976](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L976)

___

### associateId

• **associateId**: `bigint` = `protoInt64.zero`

The ID of the associate who has requested for visitation

**`Generated`**

from field: uint64 associate_id = 23;

#### Defined in

[src/visitations.scailo_pb.ts:1018](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L1018)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

[src/visitations.scailo_pb.ts:990](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L990)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

[src/visitations.scailo_pb.ts:983](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L983)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/visitations.scailo_pb.ts:885](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L885)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/visitations.scailo_pb.ts:920](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L920)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/visitations.scailo_pb.ts:913](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L913)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/visitations.scailo_pb.ts:941](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L941)

___

### entryTimestampEnd

• **entryTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of "from timestamp". 0 value will be considered. To prevent this from taken into consideration, set it to -1,

**`Generated`**

from field: uint64 entry_timestamp_end = 25;

#### Defined in

[src/visitations.scailo_pb.ts:1032](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L1032)

___

### entryTimestampStart

• **entryTimestampStart**: `bigint` = `protoInt64.zero`

The start range of "from timestamp". 0 value will be considered. To prevent this from taken into consideration, set it to -1,

**`Generated`**

from field: uint64 entry_timestamp_start = 24;

#### Defined in

[src/visitations.scailo_pb.ts:1025](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L1025)

___

### exitTimestampEnd

• **exitTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of "to timestamp". 0 value will be considered. To prevent this from taken into consideration, set it to -1,

**`Generated`**

from field: uint64 exit_timestamp_end = 27;

#### Defined in

[src/visitations.scailo_pb.ts:1046](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L1046)

___

### exitTimestampStart

• **exitTimestampStart**: `bigint` = `protoInt64.zero`

The start range of "to timestamp". 0 value will be considered. To prevent this from taken into consideration, set it to -1,

**`Generated`**

from field: uint64 exit_timestamp_start = 26;

#### Defined in

[src/visitations.scailo_pb.ts:1039](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L1039)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

[src/visitations.scailo_pb.ts:1004](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L1004)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/visitations.scailo_pb.ts:1053](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L1053)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/visitations.scailo_pb.ts:878](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L878)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/visitations.scailo_pb.ts:934](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L934)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/visitations.scailo_pb.ts:927](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L927)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/visitations.scailo_pb.ts:892](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L892)

___

### referenceId

• **referenceId**: `string` = `""`

The reference_id of the visitation

**`Generated`**

from field: string reference_id = 20;

#### Defined in

[src/visitations.scailo_pb.ts:997](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L997)

___

### sortKey

• **sortKey**: [`VISITATION_SORT_KEY`](../enums/VISITATION_SORT_KEY.md) = `VISITATION_SORT_KEY.VISITATION_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.VISITATION_SORT_KEY sort_key = 5;

#### Defined in

[src/visitations.scailo_pb.ts:906](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L906)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/visitations.scailo_pb.ts:899](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L899)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this visitation

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/visitations.scailo_pb.ts:948](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L948)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user who is being visited

**`Generated`**

from field: uint64 user_id = 22;

#### Defined in

[src/visitations.scailo_pb.ts:1011](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L1011)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/visitations.scailo_pb.ts:1062](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L1062)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/visitations.scailo_pb.ts:1060](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L1060)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VisitationsServiceFilterReq"``

#### Defined in

[src/visitations.scailo_pb.ts:1061](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L1061)

## Methods

### clone

▸ **clone**(): [`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md) \| `PlainMessage`\<[`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md) \| `PlainMessage`\<[`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md) \| `PlainMessage`\<[`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/visitations.scailo_pb.ts:1103](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L1103)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)

#### Defined in

[src/visitations.scailo_pb.ts:1091](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L1091)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)

#### Defined in

[src/visitations.scailo_pb.ts:1095](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L1095)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VisitationsServiceFilterReq`](VisitationsServiceFilterReq.md)

#### Defined in

[src/visitations.scailo_pb.ts:1099](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L1099)
