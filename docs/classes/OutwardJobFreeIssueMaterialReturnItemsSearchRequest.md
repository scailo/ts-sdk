[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobFreeIssueMaterialReturnItemsSearchRequest

# Class: OutwardJobFreeIssueMaterialReturnItemsSearchRequest

Describes the request payload to retrieve approved or unapproved items.

**`Generated`**

from message Scailo.OutwardJobFreeIssueMaterialReturnItemsSearchRequest

## Hierarchy

- `Message`\<[`OutwardJobFreeIssueMaterialReturnItemsSearchRequest`](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md)\>

  ↳ **`OutwardJobFreeIssueMaterialReturnItemsSearchRequest`**

## Table of contents

### Constructors

- [constructor](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md#constructor)

### Properties

- [approvedByUserId](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md#approvedbyuserid)
- [approvedOnEnd](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md#approvedonend)
- [approvedOnStart](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md#approvedonstart)
- [approverRoleId](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md#approverroleid)
- [count](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md#count)
- [entityUuid](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md#entityuuid)
- [familyId](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md#familyid)
- [isActive](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md#isactive)
- [itemHash](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md#itemhash)
- [offset](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md#offset)
- [outwardJobFreeIssueMaterialReturnId](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md#outwardjobfreeissuematerialreturnid)
- [searchKey](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md#searchkey)
- [sortKey](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md#sortkey)
- [sortOrder](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md#sortorder)
- [status](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md#status)
- [vendorUomId](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md#vendoruomid)
- [fields](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md#fields)
- [runtime](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md#runtime)
- [typeName](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md#typename)

### Methods

- [clone](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md#clone)
- [equals](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md#equals)
- [fromBinary](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md#frombinary)
- [fromJson](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md#fromjson)
- [fromJsonString](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md#fromjsonstring)
- [getType](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md#gettype)
- [toBinary](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md#tobinary)
- [toJSON](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md#tojson)
- [toJson](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md#tojson-1)
- [toJsonString](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md#tojsonstring)
- [equals](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md#equals-1)
- [fromBinary](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md#frombinary-1)
- [fromJson](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md#fromjson-1)
- [fromJsonString](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobFreeIssueMaterialReturnItemsSearchRequest**(`data?`): [`OutwardJobFreeIssueMaterialReturnItemsSearchRequest`](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobFreeIssueMaterialReturnItemsSearchRequest`](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md)\> |

#### Returns

[`OutwardJobFreeIssueMaterialReturnItemsSearchRequest`](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md)

#### Overrides

Message\&lt;OutwardJobFreeIssueMaterialReturnItemsSearchRequest\&gt;.constructor

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1335](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1335)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 12;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1291](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1291)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 11;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1284](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1284)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 10;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1277](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1277)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 13;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1298](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1298)

___

### count

• **count**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

Number of records to fetch. **Critical:** Use `-1` to retrieve all records. A value of `0` will return no results. Default is `0`.

**`Example`**

```ts
100
```

**`Regex`**

^(?:-1|0|[1-9][0-9]*)$

**`Format`**

Must be -1 or any non-negative integer (>= -1).

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1209](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1209)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Optional`**

**`Description`**

Filter by the organization UUID.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1263](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1263)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 22;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1312](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1312)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1193](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1193)

___

### itemHash

• **itemHash**: `string` = `""`

Stores the item hash to be dispatched

**`Generated`**

from field: string item_hash = 23;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1319](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1319)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Number of records to skip (offset) for pagination.

**`Example`**

```ts
0
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1225](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1225)

___

### outwardJobFreeIssueMaterialReturnId

• **outwardJobFreeIssueMaterialReturnId**: `bigint` = `protoInt64.zero`

The ID of the outward job free issue material return

**`Generated`**

from field: uint64 outward_job_free_issue_material_return_id = 20;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1305](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1305)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1333](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1333)

___

### sortKey

• **sortKey**: [`OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY`](../enums/OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY.md) = `OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY.OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY sort_key = 5;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1247](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1247)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

**`Optional`**

**`Description`**

Sort direction.

**`Example`**

```ts
DESCENDING
```

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1237](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1237)

___

### status

• **status**: [`OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_STATUS`](../enums/OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_STATUS.md) = `OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_STATUS.OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_STATUS_ANY_UNSPECIFIED`

The status of the items

**`Generated`**

from field: Scailo.OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_STATUS status = 7;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1270](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1270)

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

The ID of the vendor's unit of material

**`Generated`**

from field: uint64 vendor_uom_id = 24;

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1326](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1326)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1342](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1342)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1340](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1340)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobFreeIssueMaterialReturnItemsSearchRequest"``

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1341](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1341)

## Methods

### clone

▸ **clone**(): [`OutwardJobFreeIssueMaterialReturnItemsSearchRequest`](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md)

Create a deep copy.

#### Returns

[`OutwardJobFreeIssueMaterialReturnItemsSearchRequest`](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobFreeIssueMaterialReturnItemsSearchRequest`](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md) \| `PlainMessage`\<[`OutwardJobFreeIssueMaterialReturnItemsSearchRequest`](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobFreeIssueMaterialReturnItemsSearchRequest`](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobFreeIssueMaterialReturnItemsSearchRequest`](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md)\>

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
| `a` | `undefined` \| [`OutwardJobFreeIssueMaterialReturnItemsSearchRequest`](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md) \| `PlainMessage`\<[`OutwardJobFreeIssueMaterialReturnItemsSearchRequest`](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md)\> |
| `b` | `undefined` \| [`OutwardJobFreeIssueMaterialReturnItemsSearchRequest`](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md) \| `PlainMessage`\<[`OutwardJobFreeIssueMaterialReturnItemsSearchRequest`](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1373](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1373)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobFreeIssueMaterialReturnItemsSearchRequest`](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobFreeIssueMaterialReturnItemsSearchRequest`](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md)

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1361](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1361)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobFreeIssueMaterialReturnItemsSearchRequest`](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobFreeIssueMaterialReturnItemsSearchRequest`](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md)

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1365](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1365)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobFreeIssueMaterialReturnItemsSearchRequest`](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobFreeIssueMaterialReturnItemsSearchRequest`](OutwardJobFreeIssueMaterialReturnItemsSearchRequest.md)

#### Defined in

[src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1369](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/outward_jobs_free_issue_materials_returns.scailo_pb.ts#L1369)
