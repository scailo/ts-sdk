[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AssetIndentsServiceFilterReq

# Class: AssetIndentsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.AssetIndentsServiceFilterReq

## Hierarchy

- `Message`\<[`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)\>

  ↳ **`AssetIndentsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](AssetIndentsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](AssetIndentsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](AssetIndentsServiceFilterReq.md#approvedonend)
- [approvedOnStart](AssetIndentsServiceFilterReq.md#approvedonstart)
- [approverRoleId](AssetIndentsServiceFilterReq.md#approverroleid)
- [completedOnEnd](AssetIndentsServiceFilterReq.md#completedonend)
- [completedOnStart](AssetIndentsServiceFilterReq.md#completedonstart)
- [constituentFamilyId](AssetIndentsServiceFilterReq.md#constituentfamilyid)
- [count](AssetIndentsServiceFilterReq.md#count)
- [creationTimestampEnd](AssetIndentsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](AssetIndentsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](AssetIndentsServiceFilterReq.md#entityuuid)
- [finalRefNumber](AssetIndentsServiceFilterReq.md#finalrefnumber)
- [isActive](AssetIndentsServiceFilterReq.md#isactive)
- [locationId](AssetIndentsServiceFilterReq.md#locationid)
- [modificationTimestampEnd](AssetIndentsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](AssetIndentsServiceFilterReq.md#modificationtimestampstart)
- [offset](AssetIndentsServiceFilterReq.md#offset)
- [projectId](AssetIndentsServiceFilterReq.md#projectid)
- [referenceId](AssetIndentsServiceFilterReq.md#referenceid)
- [sortKey](AssetIndentsServiceFilterReq.md#sortkey)
- [sortOrder](AssetIndentsServiceFilterReq.md#sortorder)
- [status](AssetIndentsServiceFilterReq.md#status)
- [userId](AssetIndentsServiceFilterReq.md#userid)
- [fields](AssetIndentsServiceFilterReq.md#fields)
- [runtime](AssetIndentsServiceFilterReq.md#runtime)
- [typeName](AssetIndentsServiceFilterReq.md#typename)

### Methods

- [clone](AssetIndentsServiceFilterReq.md#clone)
- [equals](AssetIndentsServiceFilterReq.md#equals)
- [fromBinary](AssetIndentsServiceFilterReq.md#frombinary)
- [fromJson](AssetIndentsServiceFilterReq.md#fromjson)
- [fromJsonString](AssetIndentsServiceFilterReq.md#fromjsonstring)
- [getType](AssetIndentsServiceFilterReq.md#gettype)
- [toBinary](AssetIndentsServiceFilterReq.md#tobinary)
- [toJSON](AssetIndentsServiceFilterReq.md#tojson)
- [toJson](AssetIndentsServiceFilterReq.md#tojson-1)
- [toJsonString](AssetIndentsServiceFilterReq.md#tojsonstring)
- [equals](AssetIndentsServiceFilterReq.md#equals-1)
- [fromBinary](AssetIndentsServiceFilterReq.md#frombinary-1)
- [fromJson](AssetIndentsServiceFilterReq.md#fromjson-1)
- [fromJsonString](AssetIndentsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new AssetIndentsServiceFilterReq**(`data?`): [`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)\> |

#### Returns

[`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)

#### Overrides

Message\&lt;AssetIndentsServiceFilterReq\&gt;.constructor

#### Defined in

src/asset_indents.scailo_pb.ts:1488

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/asset_indents.scailo_pb.ts:1423

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/asset_indents.scailo_pb.ts:1416

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/asset_indents.scailo_pb.ts:1409

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/asset_indents.scailo_pb.ts:1430

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/asset_indents.scailo_pb.ts:1444

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/asset_indents.scailo_pb.ts:1437

___

### constituentFamilyId

• **constituentFamilyId**: `bigint` = `protoInt64.zero`

The ID of the constituent family that is part of an asset indent

**`Generated`**

from field: uint64 constituent_family_id = 40;

#### Defined in

src/asset_indents.scailo_pb.ts:1479

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/asset_indents.scailo_pb.ts:1339

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/asset_indents.scailo_pb.ts:1374

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/asset_indents.scailo_pb.ts:1367

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/asset_indents.scailo_pb.ts:1395

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/asset_indents.scailo_pb.ts:1458

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/asset_indents.scailo_pb.ts:1332

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 location_id = 24;

#### Defined in

src/asset_indents.scailo_pb.ts:1465

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/asset_indents.scailo_pb.ts:1388

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/asset_indents.scailo_pb.ts:1381

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/asset_indents.scailo_pb.ts:1346

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The associated project ID

**`Generated`**

from field: uint64 project_id = 50;

#### Defined in

src/asset_indents.scailo_pb.ts:1486

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the asset indent

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/asset_indents.scailo_pb.ts:1451

___

### sortKey

• **sortKey**: [`ASSET_INDENT_SORT_KEY`](../enums/ASSET_INDENT_SORT_KEY.md) = `ASSET_INDENT_SORT_KEY.ASSET_INDENT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.ASSET_INDENT_SORT_KEY sort_key = 5;

#### Defined in

src/asset_indents.scailo_pb.ts:1360

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/asset_indents.scailo_pb.ts:1353

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this asset indent

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/asset_indents.scailo_pb.ts:1402

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the associated user

**`Generated`**

from field: uint64 user_id = 25;

#### Defined in

src/asset_indents.scailo_pb.ts:1472

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/asset_indents.scailo_pb.ts:1495

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/asset_indents.scailo_pb.ts:1493

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AssetIndentsServiceFilterReq"``

#### Defined in

src/asset_indents.scailo_pb.ts:1494

## Methods

### clone

▸ **clone**(): [`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md) \| `PlainMessage`\<[`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md) \| `PlainMessage`\<[`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md) \| `PlainMessage`\<[`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/asset_indents.scailo_pb.ts:1533

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)

#### Defined in

src/asset_indents.scailo_pb.ts:1521

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)

#### Defined in

src/asset_indents.scailo_pb.ts:1525

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)

#### Defined in

src/asset_indents.scailo_pb.ts:1529
