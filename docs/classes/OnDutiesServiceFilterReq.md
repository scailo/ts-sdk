[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OnDutiesServiceFilterReq

# Class: OnDutiesServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.OnDutiesServiceFilterReq

## Hierarchy

- `Message`\<[`OnDutiesServiceFilterReq`](OnDutiesServiceFilterReq.md)\>

  ↳ **`OnDutiesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](OnDutiesServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](OnDutiesServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](OnDutiesServiceFilterReq.md#approvedonend)
- [approvedOnStart](OnDutiesServiceFilterReq.md#approvedonstart)
- [approverRoleId](OnDutiesServiceFilterReq.md#approverroleid)
- [completedOnEnd](OnDutiesServiceFilterReq.md#completedonend)
- [completedOnStart](OnDutiesServiceFilterReq.md#completedonstart)
- [count](OnDutiesServiceFilterReq.md#count)
- [creationTimestampEnd](OnDutiesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](OnDutiesServiceFilterReq.md#creationtimestampstart)
- [entityUuid](OnDutiesServiceFilterReq.md#entityuuid)
- [entryTimestampEnd](OnDutiesServiceFilterReq.md#entrytimestampend)
- [entryTimestampStart](OnDutiesServiceFilterReq.md#entrytimestampstart)
- [exitTimestampEnd](OnDutiesServiceFilterReq.md#exittimestampend)
- [exitTimestampStart](OnDutiesServiceFilterReq.md#exittimestampstart)
- [finalRefNumber](OnDutiesServiceFilterReq.md#finalrefnumber)
- [formData](OnDutiesServiceFilterReq.md#formdata)
- [isActive](OnDutiesServiceFilterReq.md#isactive)
- [modificationTimestampEnd](OnDutiesServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](OnDutiesServiceFilterReq.md#modificationtimestampstart)
- [offset](OnDutiesServiceFilterReq.md#offset)
- [referenceId](OnDutiesServiceFilterReq.md#referenceid)
- [sortKey](OnDutiesServiceFilterReq.md#sortkey)
- [sortOrder](OnDutiesServiceFilterReq.md#sortorder)
- [status](OnDutiesServiceFilterReq.md#status)
- [userId](OnDutiesServiceFilterReq.md#userid)
- [fields](OnDutiesServiceFilterReq.md#fields)
- [runtime](OnDutiesServiceFilterReq.md#runtime)
- [typeName](OnDutiesServiceFilterReq.md#typename)

### Methods

- [clone](OnDutiesServiceFilterReq.md#clone)
- [equals](OnDutiesServiceFilterReq.md#equals)
- [fromBinary](OnDutiesServiceFilterReq.md#frombinary)
- [fromJson](OnDutiesServiceFilterReq.md#fromjson)
- [fromJsonString](OnDutiesServiceFilterReq.md#fromjsonstring)
- [getType](OnDutiesServiceFilterReq.md#gettype)
- [toBinary](OnDutiesServiceFilterReq.md#tobinary)
- [toJSON](OnDutiesServiceFilterReq.md#tojson)
- [toJson](OnDutiesServiceFilterReq.md#tojson-1)
- [toJsonString](OnDutiesServiceFilterReq.md#tojsonstring)
- [equals](OnDutiesServiceFilterReq.md#equals-1)
- [fromBinary](OnDutiesServiceFilterReq.md#frombinary-1)
- [fromJson](OnDutiesServiceFilterReq.md#fromjson-1)
- [fromJsonString](OnDutiesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new OnDutiesServiceFilterReq**(`data?`): [`OnDutiesServiceFilterReq`](OnDutiesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OnDutiesServiceFilterReq`](OnDutiesServiceFilterReq.md)\> |

#### Returns

[`OnDutiesServiceFilterReq`](OnDutiesServiceFilterReq.md)

#### Overrides

Message\&lt;OnDutiesServiceFilterReq\&gt;.constructor

#### Defined in

[src/on_duties.scailo_pb.ts:1008](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L1008)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

[src/on_duties.scailo_pb.ts:929](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L929)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

[src/on_duties.scailo_pb.ts:922](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L922)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

[src/on_duties.scailo_pb.ts:915](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L915)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

[src/on_duties.scailo_pb.ts:936](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L936)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

[src/on_duties.scailo_pb.ts:950](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L950)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

[src/on_duties.scailo_pb.ts:943](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L943)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/on_duties.scailo_pb.ts:845](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L845)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/on_duties.scailo_pb.ts:880](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L880)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/on_duties.scailo_pb.ts:873](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L873)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/on_duties.scailo_pb.ts:901](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L901)

___

### entryTimestampEnd

• **entryTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of "from timestamp". 0 value will be considered. To prevent this from taken into consideration, set it to -1,

**`Generated`**

from field: uint64 entry_timestamp_end = 25;

#### Defined in

[src/on_duties.scailo_pb.ts:985](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L985)

___

### entryTimestampStart

• **entryTimestampStart**: `bigint` = `protoInt64.zero`

The start range of "from timestamp". 0 value will be considered. To prevent this from taken into consideration, set it to -1,

**`Generated`**

from field: uint64 entry_timestamp_start = 24;

#### Defined in

[src/on_duties.scailo_pb.ts:978](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L978)

___

### exitTimestampEnd

• **exitTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of "to timestamp". 0 value will be considered. To prevent this from taken into consideration, set it to -1,

**`Generated`**

from field: uint64 exit_timestamp_end = 27;

#### Defined in

[src/on_duties.scailo_pb.ts:999](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L999)

___

### exitTimestampStart

• **exitTimestampStart**: `bigint` = `protoInt64.zero`

The start range of "to timestamp". 0 value will be considered. To prevent this from taken into consideration, set it to -1,

**`Generated`**

from field: uint64 exit_timestamp_start = 26;

#### Defined in

[src/on_duties.scailo_pb.ts:992](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L992)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

[src/on_duties.scailo_pb.ts:964](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L964)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/on_duties.scailo_pb.ts:1006](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L1006)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/on_duties.scailo_pb.ts:838](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L838)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/on_duties.scailo_pb.ts:894](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L894)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/on_duties.scailo_pb.ts:887](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L887)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/on_duties.scailo_pb.ts:852](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L852)

___

### referenceId

• **referenceId**: `string` = `""`

The reference_id of the onduty

**`Generated`**

from field: string reference_id = 20;

#### Defined in

[src/on_duties.scailo_pb.ts:957](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L957)

___

### sortKey

• **sortKey**: [`ON_DUTY_SORT_KEY`](../enums/ON_DUTY_SORT_KEY.md) = `ON_DUTY_SORT_KEY.ON_DUTY_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.ON_DUTY_SORT_KEY sort_key = 5;

#### Defined in

[src/on_duties.scailo_pb.ts:866](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L866)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/on_duties.scailo_pb.ts:859](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L859)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this onduty

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/on_duties.scailo_pb.ts:908](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L908)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user who has requested for onduty

**`Generated`**

from field: uint64 user_id = 22;

#### Defined in

[src/on_duties.scailo_pb.ts:971](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L971)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/on_duties.scailo_pb.ts:1015](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L1015)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/on_duties.scailo_pb.ts:1013](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L1013)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OnDutiesServiceFilterReq"``

#### Defined in

[src/on_duties.scailo_pb.ts:1014](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L1014)

## Methods

### clone

▸ **clone**(): [`OnDutiesServiceFilterReq`](OnDutiesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`OnDutiesServiceFilterReq`](OnDutiesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`OnDutiesServiceFilterReq`](OnDutiesServiceFilterReq.md) \| `PlainMessage`\<[`OnDutiesServiceFilterReq`](OnDutiesServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`OnDutiesServiceFilterReq`](OnDutiesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OnDutiesServiceFilterReq`](OnDutiesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`OnDutiesServiceFilterReq`](OnDutiesServiceFilterReq.md) \| `PlainMessage`\<[`OnDutiesServiceFilterReq`](OnDutiesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`OnDutiesServiceFilterReq`](OnDutiesServiceFilterReq.md) \| `PlainMessage`\<[`OnDutiesServiceFilterReq`](OnDutiesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/on_duties.scailo_pb.ts:1055](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L1055)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OnDutiesServiceFilterReq`](OnDutiesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OnDutiesServiceFilterReq`](OnDutiesServiceFilterReq.md)

#### Defined in

[src/on_duties.scailo_pb.ts:1043](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L1043)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OnDutiesServiceFilterReq`](OnDutiesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OnDutiesServiceFilterReq`](OnDutiesServiceFilterReq.md)

#### Defined in

[src/on_duties.scailo_pb.ts:1047](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L1047)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OnDutiesServiceFilterReq`](OnDutiesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OnDutiesServiceFilterReq`](OnDutiesServiceFilterReq.md)

#### Defined in

[src/on_duties.scailo_pb.ts:1051](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L1051)
