[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobFreeIssueMaterialReturnItemsSearchRequest

# Class: InwardJobFreeIssueMaterialReturnItemsSearchRequest

Describes the request payload to retrieve approved or unapproved items.

**`Generated`**

from message Scailo.InwardJobFreeIssueMaterialReturnItemsSearchRequest

## Hierarchy

- `Message`\<[`InwardJobFreeIssueMaterialReturnItemsSearchRequest`](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md)\>

  ↳ **`InwardJobFreeIssueMaterialReturnItemsSearchRequest`**

## Table of contents

### Constructors

- [constructor](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md#constructor)

### Properties

- [approvedByUserId](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md#approvedbyuserid)
- [approvedOnEnd](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md#approvedonend)
- [approvedOnStart](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md#approvedonstart)
- [approverRoleId](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md#approverroleid)
- [clientFamilyCode](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md#clientfamilycode)
- [clientUomId](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md#clientuomid)
- [count](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md#count)
- [entityUuid](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md#entityuuid)
- [familyId](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md#familyid)
- [inwardJobFreeIssueMaterialReturnId](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md#inwardjobfreeissuematerialreturnid)
- [isActive](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md#isactive)
- [itemHash](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md#itemhash)
- [offset](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md#offset)
- [searchKey](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md#searchkey)
- [sortKey](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md#sortkey)
- [sortOrder](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md#sortorder)
- [status](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md#status)
- [fields](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md#fields)
- [runtime](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md#runtime)
- [typeName](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md#typename)

### Methods

- [clone](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md#clone)
- [equals](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md#equals)
- [fromBinary](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md#frombinary)
- [fromJson](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md#fromjson)
- [fromJsonString](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md#fromjsonstring)
- [getType](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md#gettype)
- [toBinary](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md#tobinary)
- [toJSON](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md#tojson)
- [toJson](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md#tojson-1)
- [toJsonString](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md#tojsonstring)
- [equals](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md#equals-1)
- [fromBinary](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md#frombinary-1)
- [fromJson](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md#fromjson-1)
- [fromJsonString](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobFreeIssueMaterialReturnItemsSearchRequest**(`data?`): [`InwardJobFreeIssueMaterialReturnItemsSearchRequest`](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobFreeIssueMaterialReturnItemsSearchRequest`](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md)\> |

#### Returns

[`InwardJobFreeIssueMaterialReturnItemsSearchRequest`](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md)

#### Overrides

Message\&lt;InwardJobFreeIssueMaterialReturnItemsSearchRequest\&gt;.constructor

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1259](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L1259)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 12;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1208](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L1208)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 11;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1201](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L1201)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 10;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1194](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L1194)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 13;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1215](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L1215)

___

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

Stores the family code as given by the client

**`Generated`**

from field: string client_family_code = 26;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1250](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L1250)

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

The ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 24;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1243](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L1243)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1152](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L1152)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1180](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L1180)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 22;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1229](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L1229)

___

### inwardJobFreeIssueMaterialReturnId

• **inwardJobFreeIssueMaterialReturnId**: `bigint` = `protoInt64.zero`

The ID of the inward job free issue material return

**`Generated`**

from field: uint64 inward_job_free_issue_material_return_id = 20;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1222](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L1222)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1145](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L1145)

___

### itemHash

• **itemHash**: `string` = `""`

Stores the item hash to be dispatched

**`Generated`**

from field: string item_hash = 23;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1236](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L1236)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1159](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L1159)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1257](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L1257)

___

### sortKey

• **sortKey**: [`INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY`](../enums/INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY.md) = `INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY.INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY sort_key = 5;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1173](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L1173)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1166](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L1166)

___

### status

• **status**: [`INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_STATUS`](../enums/INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_STATUS.md) = `INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_STATUS.INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_STATUS_ANY_UNSPECIFIED`

The status of the items

**`Generated`**

from field: Scailo.INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_STATUS status = 7;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1187](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L1187)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1266](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L1266)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1264](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L1264)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobFreeIssueMaterialReturnItemsSearchRequest"``

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1265](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L1265)

## Methods

### clone

▸ **clone**(): [`InwardJobFreeIssueMaterialReturnItemsSearchRequest`](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md)

Create a deep copy.

#### Returns

[`InwardJobFreeIssueMaterialReturnItemsSearchRequest`](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobFreeIssueMaterialReturnItemsSearchRequest`](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md) \| `PlainMessage`\<[`InwardJobFreeIssueMaterialReturnItemsSearchRequest`](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobFreeIssueMaterialReturnItemsSearchRequest`](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobFreeIssueMaterialReturnItemsSearchRequest`](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md)\>

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
| `a` | `undefined` \| [`InwardJobFreeIssueMaterialReturnItemsSearchRequest`](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md) \| `PlainMessage`\<[`InwardJobFreeIssueMaterialReturnItemsSearchRequest`](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md)\> |
| `b` | `undefined` \| [`InwardJobFreeIssueMaterialReturnItemsSearchRequest`](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md) \| `PlainMessage`\<[`InwardJobFreeIssueMaterialReturnItemsSearchRequest`](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1298](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L1298)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobFreeIssueMaterialReturnItemsSearchRequest`](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobFreeIssueMaterialReturnItemsSearchRequest`](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md)

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1286](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L1286)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobFreeIssueMaterialReturnItemsSearchRequest`](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobFreeIssueMaterialReturnItemsSearchRequest`](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md)

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1290](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L1290)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobFreeIssueMaterialReturnItemsSearchRequest`](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobFreeIssueMaterialReturnItemsSearchRequest`](InwardJobFreeIssueMaterialReturnItemsSearchRequest.md)

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1294](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L1294)
