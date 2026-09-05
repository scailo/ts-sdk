[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobFreeIssueMaterialItemsSearchRequest

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
- [buyerClientId](InwardJobFreeIssueMaterialItemsSearchRequest.md#buyerclientid)
- [clientFamilyCode](InwardJobFreeIssueMaterialItemsSearchRequest.md#clientfamilycode)
- [clientUomId](InwardJobFreeIssueMaterialItemsSearchRequest.md#clientuomid)
- [count](InwardJobFreeIssueMaterialItemsSearchRequest.md#count)
- [entityUuid](InwardJobFreeIssueMaterialItemsSearchRequest.md#entityuuid)
- [familyId](InwardJobFreeIssueMaterialItemsSearchRequest.md#familyid)
- [inwardJobFreeIssueMaterialId](InwardJobFreeIssueMaterialItemsSearchRequest.md#inwardjobfreeissuematerialid)
- [inwardJobId](InwardJobFreeIssueMaterialItemsSearchRequest.md#inwardjobid)
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

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1474](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1474)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 12;

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1398](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1398)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 11;

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1391](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1391)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 10;

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1384](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1384)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 13;

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1405](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1405)

___

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter line items by the unique internal identifier of the buyer client (the entity financially responsible) associated with the linked source document (e.g., Inward Job).

**`Example`**

```ts
1051
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 buyer_client_id = 200;

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1456](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1456)

___

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

Stores the family code as given by the client

**`Generated`**

from field: string client_family_code = 26;

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1433](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1433)

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

The ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 24;

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1426](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1426)

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

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1316](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1316)

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

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1370](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1370)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 22;

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1419](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1419)

___

### inwardJobFreeIssueMaterialId

• **inwardJobFreeIssueMaterialId**: `bigint` = `protoInt64.zero`

The ID of the inward job free issue material

**`Generated`**

from field: uint64 inward_job_free_issue_material_id = 20;

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1412](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1412)

___

### inwardJobId

• **inwardJobId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter line items by the unique internal identifier of the inward job.

**`Example`**

```ts
1024
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 inward_job_id = 210;

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1472](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1472)

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

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1300](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1300)

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

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1332](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1332)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1440](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1440)

___

### sortKey

• **sortKey**: [`INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY`](../enums/INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY.md) = `INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY.INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY sort_key = 5;

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1354](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1354)

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

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1344](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1344)

___

### status

• **status**: [`INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_STATUS`](../enums/INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_STATUS.md) = `INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_STATUS.INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_STATUS_ANY_UNSPECIFIED`

The status of the items

**`Generated`**

from field: Scailo.INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_STATUS status = 7;

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1377](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1377)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1481](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1481)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1479](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1479)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobFreeIssueMaterialItemsSearchRequest"``

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1480](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1480)

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

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1514](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1514)

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

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1502](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1502)

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

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1506](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1506)

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

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1510](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1510)
