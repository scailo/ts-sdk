[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AssetIndentsServiceCountReq

# Class: AssetIndentsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.AssetIndentsServiceCountReq

## Hierarchy

- `Message`\<[`AssetIndentsServiceCountReq`](AssetIndentsServiceCountReq.md)\>

  ↳ **`AssetIndentsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](AssetIndentsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](AssetIndentsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](AssetIndentsServiceCountReq.md#approvedonend)
- [approvedOnStart](AssetIndentsServiceCountReq.md#approvedonstart)
- [approverRoleId](AssetIndentsServiceCountReq.md#approverroleid)
- [completedOnEnd](AssetIndentsServiceCountReq.md#completedonend)
- [completedOnStart](AssetIndentsServiceCountReq.md#completedonstart)
- [constituentFamilyId](AssetIndentsServiceCountReq.md#constituentfamilyid)
- [creationTimestampEnd](AssetIndentsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](AssetIndentsServiceCountReq.md#creationtimestampstart)
- [entityUuid](AssetIndentsServiceCountReq.md#entityuuid)
- [finalRefNumber](AssetIndentsServiceCountReq.md#finalrefnumber)
- [formData](AssetIndentsServiceCountReq.md#formdata)
- [isActive](AssetIndentsServiceCountReq.md#isactive)
- [locationId](AssetIndentsServiceCountReq.md#locationid)
- [modificationTimestampEnd](AssetIndentsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](AssetIndentsServiceCountReq.md#modificationtimestampstart)
- [projectId](AssetIndentsServiceCountReq.md#projectid)
- [referenceId](AssetIndentsServiceCountReq.md#referenceid)
- [status](AssetIndentsServiceCountReq.md#status)
- [userId](AssetIndentsServiceCountReq.md#userid)
- [fields](AssetIndentsServiceCountReq.md#fields)
- [runtime](AssetIndentsServiceCountReq.md#runtime)
- [typeName](AssetIndentsServiceCountReq.md#typename)

### Methods

- [clone](AssetIndentsServiceCountReq.md#clone)
- [equals](AssetIndentsServiceCountReq.md#equals)
- [fromBinary](AssetIndentsServiceCountReq.md#frombinary)
- [fromJson](AssetIndentsServiceCountReq.md#fromjson)
- [fromJsonString](AssetIndentsServiceCountReq.md#fromjsonstring)
- [getType](AssetIndentsServiceCountReq.md#gettype)
- [toBinary](AssetIndentsServiceCountReq.md#tobinary)
- [toJSON](AssetIndentsServiceCountReq.md#tojson)
- [toJson](AssetIndentsServiceCountReq.md#tojson-1)
- [toJsonString](AssetIndentsServiceCountReq.md#tojsonstring)
- [equals](AssetIndentsServiceCountReq.md#equals-1)
- [fromBinary](AssetIndentsServiceCountReq.md#frombinary-1)
- [fromJson](AssetIndentsServiceCountReq.md#fromjson-1)
- [fromJsonString](AssetIndentsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new AssetIndentsServiceCountReq**(`data?`): [`AssetIndentsServiceCountReq`](AssetIndentsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AssetIndentsServiceCountReq`](AssetIndentsServiceCountReq.md)\> |

#### Returns

[`AssetIndentsServiceCountReq`](AssetIndentsServiceCountReq.md)

#### Overrides

Message\&lt;AssetIndentsServiceCountReq\&gt;.constructor

#### Defined in

[src/asset_indents.scailo_pb.ts:1693](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L1693)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

[src/asset_indents.scailo_pb.ts:1621](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L1621)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

[src/asset_indents.scailo_pb.ts:1614](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L1614)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

[src/asset_indents.scailo_pb.ts:1607](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L1607)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

[src/asset_indents.scailo_pb.ts:1628](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L1628)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

[src/asset_indents.scailo_pb.ts:1642](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L1642)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

[src/asset_indents.scailo_pb.ts:1635](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L1635)

___

### constituentFamilyId

• **constituentFamilyId**: `bigint` = `protoInt64.zero`

The ID of the constituent family that is part of an asset indent

**`Generated`**

from field: uint64 constituent_family_id = 40;

#### Defined in

[src/asset_indents.scailo_pb.ts:1677](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L1677)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/asset_indents.scailo_pb.ts:1572](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L1572)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/asset_indents.scailo_pb.ts:1565](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L1565)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/asset_indents.scailo_pb.ts:1593](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L1593)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

[src/asset_indents.scailo_pb.ts:1656](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L1656)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/asset_indents.scailo_pb.ts:1691](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L1691)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/asset_indents.scailo_pb.ts:1558](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L1558)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 location_id = 24;

#### Defined in

[src/asset_indents.scailo_pb.ts:1663](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L1663)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/asset_indents.scailo_pb.ts:1586](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L1586)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/asset_indents.scailo_pb.ts:1579](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L1579)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The associated project ID

**`Generated`**

from field: uint64 project_id = 50;

#### Defined in

[src/asset_indents.scailo_pb.ts:1684](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L1684)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the asset indent

**`Generated`**

from field: string reference_id = 20;

#### Defined in

[src/asset_indents.scailo_pb.ts:1649](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L1649)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this asset indent

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/asset_indents.scailo_pb.ts:1600](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L1600)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the associated user

**`Generated`**

from field: uint64 user_id = 25;

#### Defined in

[src/asset_indents.scailo_pb.ts:1670](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L1670)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/asset_indents.scailo_pb.ts:1700](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L1700)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/asset_indents.scailo_pb.ts:1698](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L1698)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AssetIndentsServiceCountReq"``

#### Defined in

[src/asset_indents.scailo_pb.ts:1699](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L1699)

## Methods

### clone

▸ **clone**(): [`AssetIndentsServiceCountReq`](AssetIndentsServiceCountReq.md)

Create a deep copy.

#### Returns

[`AssetIndentsServiceCountReq`](AssetIndentsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`AssetIndentsServiceCountReq`](AssetIndentsServiceCountReq.md) \| `PlainMessage`\<[`AssetIndentsServiceCountReq`](AssetIndentsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`AssetIndentsServiceCountReq`](AssetIndentsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AssetIndentsServiceCountReq`](AssetIndentsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`AssetIndentsServiceCountReq`](AssetIndentsServiceCountReq.md) \| `PlainMessage`\<[`AssetIndentsServiceCountReq`](AssetIndentsServiceCountReq.md)\> |
| `b` | `undefined` \| [`AssetIndentsServiceCountReq`](AssetIndentsServiceCountReq.md) \| `PlainMessage`\<[`AssetIndentsServiceCountReq`](AssetIndentsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/asset_indents.scailo_pb.ts:1735](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L1735)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AssetIndentsServiceCountReq`](AssetIndentsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AssetIndentsServiceCountReq`](AssetIndentsServiceCountReq.md)

#### Defined in

[src/asset_indents.scailo_pb.ts:1723](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L1723)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AssetIndentsServiceCountReq`](AssetIndentsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssetIndentsServiceCountReq`](AssetIndentsServiceCountReq.md)

#### Defined in

[src/asset_indents.scailo_pb.ts:1727](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L1727)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AssetIndentsServiceCountReq`](AssetIndentsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssetIndentsServiceCountReq`](AssetIndentsServiceCountReq.md)

#### Defined in

[src/asset_indents.scailo_pb.ts:1731](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L1731)
