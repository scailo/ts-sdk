[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobFreeIssueMaterialItemsSearchRequest

# Class: OutwardJobFreeIssueMaterialItemsSearchRequest

Describes the request payload to retrieve approved or unapproved items.

**`Generated`**

from message Scailo.OutwardJobFreeIssueMaterialItemsSearchRequest

## Hierarchy

- `Message`\<[`OutwardJobFreeIssueMaterialItemsSearchRequest`](OutwardJobFreeIssueMaterialItemsSearchRequest.md)\>

  ↳ **`OutwardJobFreeIssueMaterialItemsSearchRequest`**

## Table of contents

### Constructors

- [constructor](OutwardJobFreeIssueMaterialItemsSearchRequest.md#constructor)

### Properties

- [approvedByUserId](OutwardJobFreeIssueMaterialItemsSearchRequest.md#approvedbyuserid)
- [approvedOnEnd](OutwardJobFreeIssueMaterialItemsSearchRequest.md#approvedonend)
- [approvedOnStart](OutwardJobFreeIssueMaterialItemsSearchRequest.md#approvedonstart)
- [approverRoleId](OutwardJobFreeIssueMaterialItemsSearchRequest.md#approverroleid)
- [count](OutwardJobFreeIssueMaterialItemsSearchRequest.md#count)
- [entityUuid](OutwardJobFreeIssueMaterialItemsSearchRequest.md#entityuuid)
- [familyId](OutwardJobFreeIssueMaterialItemsSearchRequest.md#familyid)
- [isActive](OutwardJobFreeIssueMaterialItemsSearchRequest.md#isactive)
- [itemHash](OutwardJobFreeIssueMaterialItemsSearchRequest.md#itemhash)
- [offset](OutwardJobFreeIssueMaterialItemsSearchRequest.md#offset)
- [outwardJobFreeIssueMaterialId](OutwardJobFreeIssueMaterialItemsSearchRequest.md#outwardjobfreeissuematerialid)
- [searchKey](OutwardJobFreeIssueMaterialItemsSearchRequest.md#searchkey)
- [sortKey](OutwardJobFreeIssueMaterialItemsSearchRequest.md#sortkey)
- [sortOrder](OutwardJobFreeIssueMaterialItemsSearchRequest.md#sortorder)
- [status](OutwardJobFreeIssueMaterialItemsSearchRequest.md#status)
- [vendorFamilyCode](OutwardJobFreeIssueMaterialItemsSearchRequest.md#vendorfamilycode)
- [vendorUomId](OutwardJobFreeIssueMaterialItemsSearchRequest.md#vendoruomid)
- [fields](OutwardJobFreeIssueMaterialItemsSearchRequest.md#fields)
- [runtime](OutwardJobFreeIssueMaterialItemsSearchRequest.md#runtime)
- [typeName](OutwardJobFreeIssueMaterialItemsSearchRequest.md#typename)

### Methods

- [clone](OutwardJobFreeIssueMaterialItemsSearchRequest.md#clone)
- [equals](OutwardJobFreeIssueMaterialItemsSearchRequest.md#equals)
- [fromBinary](OutwardJobFreeIssueMaterialItemsSearchRequest.md#frombinary)
- [fromJson](OutwardJobFreeIssueMaterialItemsSearchRequest.md#fromjson)
- [fromJsonString](OutwardJobFreeIssueMaterialItemsSearchRequest.md#fromjsonstring)
- [getType](OutwardJobFreeIssueMaterialItemsSearchRequest.md#gettype)
- [toBinary](OutwardJobFreeIssueMaterialItemsSearchRequest.md#tobinary)
- [toJSON](OutwardJobFreeIssueMaterialItemsSearchRequest.md#tojson)
- [toJson](OutwardJobFreeIssueMaterialItemsSearchRequest.md#tojson-1)
- [toJsonString](OutwardJobFreeIssueMaterialItemsSearchRequest.md#tojsonstring)
- [equals](OutwardJobFreeIssueMaterialItemsSearchRequest.md#equals-1)
- [fromBinary](OutwardJobFreeIssueMaterialItemsSearchRequest.md#frombinary-1)
- [fromJson](OutwardJobFreeIssueMaterialItemsSearchRequest.md#fromjson-1)
- [fromJsonString](OutwardJobFreeIssueMaterialItemsSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobFreeIssueMaterialItemsSearchRequest**(`data?`): [`OutwardJobFreeIssueMaterialItemsSearchRequest`](OutwardJobFreeIssueMaterialItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobFreeIssueMaterialItemsSearchRequest`](OutwardJobFreeIssueMaterialItemsSearchRequest.md)\> |

#### Returns

[`OutwardJobFreeIssueMaterialItemsSearchRequest`](OutwardJobFreeIssueMaterialItemsSearchRequest.md)

#### Overrides

Message\&lt;OutwardJobFreeIssueMaterialItemsSearchRequest\&gt;.constructor

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1317](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1317)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 12;

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1266](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1266)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 11;

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1259](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1259)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 10;

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1252](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1252)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 13;

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1273](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1273)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1210](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1210)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1238](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1238)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 22;

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1287](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1287)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1203](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1203)

___

### itemHash

• **itemHash**: `string` = `""`

Stores the item hash to be sent

**`Generated`**

from field: string item_hash = 23;

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1294](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1294)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1217](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1217)

___

### outwardJobFreeIssueMaterialId

• **outwardJobFreeIssueMaterialId**: `bigint` = `protoInt64.zero`

The ID of the outward job free issue material

**`Generated`**

from field: uint64 outward_job_free_issue_material_id = 20;

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1280](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1280)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1315](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1315)

___

### sortKey

• **sortKey**: [`OUTWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY`](../enums/OUTWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY.md) = `OUTWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY.OUTWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.OUTWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY sort_key = 5;

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1231](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1231)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1224](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1224)

___

### status

• **status**: [`OUTWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_STATUS`](../enums/OUTWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_STATUS.md) = `OUTWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_STATUS.OUTWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_STATUS_ANY_UNSPECIFIED`

The status of the items

**`Generated`**

from field: Scailo.OUTWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_STATUS status = 7;

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1245](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1245)

___

### vendorFamilyCode

• **vendorFamilyCode**: `string` = `""`

Stores the family code as given by the vendor

**`Generated`**

from field: string vendor_family_code = 26;

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1308](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1308)

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

The ID of the vendor's unit of material

**`Generated`**

from field: uint64 vendor_uom_id = 24;

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1301](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1301)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1324](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1324)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1322](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1322)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobFreeIssueMaterialItemsSearchRequest"``

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1323](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1323)

## Methods

### clone

▸ **clone**(): [`OutwardJobFreeIssueMaterialItemsSearchRequest`](OutwardJobFreeIssueMaterialItemsSearchRequest.md)

Create a deep copy.

#### Returns

[`OutwardJobFreeIssueMaterialItemsSearchRequest`](OutwardJobFreeIssueMaterialItemsSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobFreeIssueMaterialItemsSearchRequest`](OutwardJobFreeIssueMaterialItemsSearchRequest.md) \| `PlainMessage`\<[`OutwardJobFreeIssueMaterialItemsSearchRequest`](OutwardJobFreeIssueMaterialItemsSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobFreeIssueMaterialItemsSearchRequest`](OutwardJobFreeIssueMaterialItemsSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobFreeIssueMaterialItemsSearchRequest`](OutwardJobFreeIssueMaterialItemsSearchRequest.md)\>

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
| `a` | `undefined` \| [`OutwardJobFreeIssueMaterialItemsSearchRequest`](OutwardJobFreeIssueMaterialItemsSearchRequest.md) \| `PlainMessage`\<[`OutwardJobFreeIssueMaterialItemsSearchRequest`](OutwardJobFreeIssueMaterialItemsSearchRequest.md)\> |
| `b` | `undefined` \| [`OutwardJobFreeIssueMaterialItemsSearchRequest`](OutwardJobFreeIssueMaterialItemsSearchRequest.md) \| `PlainMessage`\<[`OutwardJobFreeIssueMaterialItemsSearchRequest`](OutwardJobFreeIssueMaterialItemsSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1356](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1356)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobFreeIssueMaterialItemsSearchRequest`](OutwardJobFreeIssueMaterialItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobFreeIssueMaterialItemsSearchRequest`](OutwardJobFreeIssueMaterialItemsSearchRequest.md)

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1344](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1344)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobFreeIssueMaterialItemsSearchRequest`](OutwardJobFreeIssueMaterialItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobFreeIssueMaterialItemsSearchRequest`](OutwardJobFreeIssueMaterialItemsSearchRequest.md)

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1348](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1348)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobFreeIssueMaterialItemsSearchRequest`](OutwardJobFreeIssueMaterialItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobFreeIssueMaterialItemsSearchRequest`](OutwardJobFreeIssueMaterialItemsSearchRequest.md)

#### Defined in

[src/outward_jobs_free_issue_materials.scailo_pb.ts:1352](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs_free_issue_materials.scailo_pb.ts#L1352)
