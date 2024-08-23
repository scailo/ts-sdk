[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobFreeIssueMaterialItemsSearchRequest

# Class: InwardJobFreeIssueMaterialItemsSearchRequest

Describes the request payload to retrieve approved or unapproved items.

**`Generated`**

from message Scailo.InwardJobFreeIssueMaterialItemsSearchRequest

## Hierarchy

- `Message`\<[`InwardJobFreeIssueMaterialItemsSearchRequest`](InwardJobFreeIssueMaterialItemsSearchRequest.md)\>

  ↳ **`InwardJobFreeIssueMaterialItemsSearchRequest`**

## Table of contents

### Constructors

- [constructor](InwardJobFreeIssueMaterialItemsSearchRequest.md#constructor)

### Properties

- [approvedByUserId](InwardJobFreeIssueMaterialItemsSearchRequest.md#approvedbyuserid)
- [approvedOnEnd](InwardJobFreeIssueMaterialItemsSearchRequest.md#approvedonend)
- [approvedOnStart](InwardJobFreeIssueMaterialItemsSearchRequest.md#approvedonstart)
- [approverRoleId](InwardJobFreeIssueMaterialItemsSearchRequest.md#approverroleid)
- [clientFamilyCode](InwardJobFreeIssueMaterialItemsSearchRequest.md#clientfamilycode)
- [clientUomId](InwardJobFreeIssueMaterialItemsSearchRequest.md#clientuomid)
- [count](InwardJobFreeIssueMaterialItemsSearchRequest.md#count)
- [entityUuid](InwardJobFreeIssueMaterialItemsSearchRequest.md#entityuuid)
- [familyId](InwardJobFreeIssueMaterialItemsSearchRequest.md#familyid)
- [inwardJobFreeIssueMaterialId](InwardJobFreeIssueMaterialItemsSearchRequest.md#inwardjobfreeissuematerialid)
- [isActive](InwardJobFreeIssueMaterialItemsSearchRequest.md#isactive)
- [offset](InwardJobFreeIssueMaterialItemsSearchRequest.md#offset)
- [searchKey](InwardJobFreeIssueMaterialItemsSearchRequest.md#searchkey)
- [sortKey](InwardJobFreeIssueMaterialItemsSearchRequest.md#sortkey)
- [sortOrder](InwardJobFreeIssueMaterialItemsSearchRequest.md#sortorder)
- [status](InwardJobFreeIssueMaterialItemsSearchRequest.md#status)
- [fields](InwardJobFreeIssueMaterialItemsSearchRequest.md#fields)
- [runtime](InwardJobFreeIssueMaterialItemsSearchRequest.md#runtime)
- [typeName](InwardJobFreeIssueMaterialItemsSearchRequest.md#typename)

### Methods

- [clone](InwardJobFreeIssueMaterialItemsSearchRequest.md#clone)
- [equals](InwardJobFreeIssueMaterialItemsSearchRequest.md#equals)
- [fromBinary](InwardJobFreeIssueMaterialItemsSearchRequest.md#frombinary)
- [fromJson](InwardJobFreeIssueMaterialItemsSearchRequest.md#fromjson)
- [fromJsonString](InwardJobFreeIssueMaterialItemsSearchRequest.md#fromjsonstring)
- [getType](InwardJobFreeIssueMaterialItemsSearchRequest.md#gettype)
- [toBinary](InwardJobFreeIssueMaterialItemsSearchRequest.md#tobinary)
- [toJSON](InwardJobFreeIssueMaterialItemsSearchRequest.md#tojson)
- [toJson](InwardJobFreeIssueMaterialItemsSearchRequest.md#tojson-1)
- [toJsonString](InwardJobFreeIssueMaterialItemsSearchRequest.md#tojsonstring)
- [equals](InwardJobFreeIssueMaterialItemsSearchRequest.md#equals-1)
- [fromBinary](InwardJobFreeIssueMaterialItemsSearchRequest.md#frombinary-1)
- [fromJson](InwardJobFreeIssueMaterialItemsSearchRequest.md#fromjson-1)
- [fromJsonString](InwardJobFreeIssueMaterialItemsSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobFreeIssueMaterialItemsSearchRequest**(`data?`): [`InwardJobFreeIssueMaterialItemsSearchRequest`](InwardJobFreeIssueMaterialItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobFreeIssueMaterialItemsSearchRequest`](InwardJobFreeIssueMaterialItemsSearchRequest.md)\> |

#### Returns

[`InwardJobFreeIssueMaterialItemsSearchRequest`](InwardJobFreeIssueMaterialItemsSearchRequest.md)

#### Overrides

Message\&lt;InwardJobFreeIssueMaterialItemsSearchRequest\&gt;.constructor

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1185

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 12;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1141

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 11;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1134

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 10;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1127

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 13;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1148

___

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

Stores the family code as given by the client

**`Generated`**

from field: string client_family_code = 26;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1176

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

The ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 24;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1169

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1085

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1113

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 22;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1162

___

### inwardJobFreeIssueMaterialId

• **inwardJobFreeIssueMaterialId**: `bigint` = `protoInt64.zero`

The ID of the inward job free issue material

**`Generated`**

from field: uint64 inward_job_free_issue_material_id = 20;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1155

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1078

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1092

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1183

___

### sortKey

• **sortKey**: [`INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY`](../enums/INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY.md) = `INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY.INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY sort_key = 5;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1106

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1099

___

### status

• **status**: [`INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_STATUS`](../enums/INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_STATUS.md) = `INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_STATUS.INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_STATUS_ANY_UNSPECIFIED`

The status of the items

**`Generated`**

from field: Scailo.INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_STATUS status = 7;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1120

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1192

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1190

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobFreeIssueMaterialItemsSearchRequest"``

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1191

## Methods

### clone

▸ **clone**(): [`InwardJobFreeIssueMaterialItemsSearchRequest`](InwardJobFreeIssueMaterialItemsSearchRequest.md)

Create a deep copy.

#### Returns

[`InwardJobFreeIssueMaterialItemsSearchRequest`](InwardJobFreeIssueMaterialItemsSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobFreeIssueMaterialItemsSearchRequest`](InwardJobFreeIssueMaterialItemsSearchRequest.md) \| `PlainMessage`\<[`InwardJobFreeIssueMaterialItemsSearchRequest`](InwardJobFreeIssueMaterialItemsSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobFreeIssueMaterialItemsSearchRequest`](InwardJobFreeIssueMaterialItemsSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobFreeIssueMaterialItemsSearchRequest`](InwardJobFreeIssueMaterialItemsSearchRequest.md)\>

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
| `a` | `undefined` \| [`InwardJobFreeIssueMaterialItemsSearchRequest`](InwardJobFreeIssueMaterialItemsSearchRequest.md) \| `PlainMessage`\<[`InwardJobFreeIssueMaterialItemsSearchRequest`](InwardJobFreeIssueMaterialItemsSearchRequest.md)\> |
| `b` | `undefined` \| [`InwardJobFreeIssueMaterialItemsSearchRequest`](InwardJobFreeIssueMaterialItemsSearchRequest.md) \| `PlainMessage`\<[`InwardJobFreeIssueMaterialItemsSearchRequest`](InwardJobFreeIssueMaterialItemsSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1223

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobFreeIssueMaterialItemsSearchRequest`](InwardJobFreeIssueMaterialItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobFreeIssueMaterialItemsSearchRequest`](InwardJobFreeIssueMaterialItemsSearchRequest.md)

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1211

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobFreeIssueMaterialItemsSearchRequest`](InwardJobFreeIssueMaterialItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobFreeIssueMaterialItemsSearchRequest`](InwardJobFreeIssueMaterialItemsSearchRequest.md)

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1215

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobFreeIssueMaterialItemsSearchRequest`](InwardJobFreeIssueMaterialItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobFreeIssueMaterialItemsSearchRequest`](InwardJobFreeIssueMaterialItemsSearchRequest.md)

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:1219
