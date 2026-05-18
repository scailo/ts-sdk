[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobOutwardItemsSearchRequest

# Class: InwardJobOutwardItemsSearchRequest

Describes the request payload to retrieve approved or unapproved items.

**`Generated`**

from message Scailo.InwardJobOutwardItemsSearchRequest

## Hierarchy

- `Message`\<[`InwardJobOutwardItemsSearchRequest`](InwardJobOutwardItemsSearchRequest.md)\>

  ↳ **`InwardJobOutwardItemsSearchRequest`**

## Table of contents

### Constructors

- [constructor](InwardJobOutwardItemsSearchRequest.md#constructor)

### Properties

- [approvedByUserId](InwardJobOutwardItemsSearchRequest.md#approvedbyuserid)
- [approvedOnEnd](InwardJobOutwardItemsSearchRequest.md#approvedonend)
- [approvedOnStart](InwardJobOutwardItemsSearchRequest.md#approvedonstart)
- [approverRoleId](InwardJobOutwardItemsSearchRequest.md#approverroleid)
- [buyerClientId](InwardJobOutwardItemsSearchRequest.md#buyerclientid)
- [clientFamilyCode](InwardJobOutwardItemsSearchRequest.md#clientfamilycode)
- [clientUomId](InwardJobOutwardItemsSearchRequest.md#clientuomid)
- [count](InwardJobOutwardItemsSearchRequest.md#count)
- [deliveryDateEnd](InwardJobOutwardItemsSearchRequest.md#deliverydateend)
- [deliveryDateExact](InwardJobOutwardItemsSearchRequest.md#deliverydateexact)
- [deliveryDateStart](InwardJobOutwardItemsSearchRequest.md#deliverydatestart)
- [entityUuid](InwardJobOutwardItemsSearchRequest.md#entityuuid)
- [familyId](InwardJobOutwardItemsSearchRequest.md#familyid)
- [inwardJobId](InwardJobOutwardItemsSearchRequest.md#inwardjobid)
- [isActive](InwardJobOutwardItemsSearchRequest.md#isactive)
- [offset](InwardJobOutwardItemsSearchRequest.md#offset)
- [searchKey](InwardJobOutwardItemsSearchRequest.md#searchkey)
- [sortKey](InwardJobOutwardItemsSearchRequest.md#sortkey)
- [sortOrder](InwardJobOutwardItemsSearchRequest.md#sortorder)
- [status](InwardJobOutwardItemsSearchRequest.md#status)
- [fields](InwardJobOutwardItemsSearchRequest.md#fields)
- [runtime](InwardJobOutwardItemsSearchRequest.md#runtime)
- [typeName](InwardJobOutwardItemsSearchRequest.md#typename)

### Methods

- [clone](InwardJobOutwardItemsSearchRequest.md#clone)
- [equals](InwardJobOutwardItemsSearchRequest.md#equals)
- [fromBinary](InwardJobOutwardItemsSearchRequest.md#frombinary)
- [fromJson](InwardJobOutwardItemsSearchRequest.md#fromjson)
- [fromJsonString](InwardJobOutwardItemsSearchRequest.md#fromjsonstring)
- [getType](InwardJobOutwardItemsSearchRequest.md#gettype)
- [toBinary](InwardJobOutwardItemsSearchRequest.md#tobinary)
- [toJSON](InwardJobOutwardItemsSearchRequest.md#tojson)
- [toJson](InwardJobOutwardItemsSearchRequest.md#tojson-1)
- [toJsonString](InwardJobOutwardItemsSearchRequest.md#tojsonstring)
- [equals](InwardJobOutwardItemsSearchRequest.md#equals-1)
- [fromBinary](InwardJobOutwardItemsSearchRequest.md#frombinary-1)
- [fromJson](InwardJobOutwardItemsSearchRequest.md#fromjson-1)
- [fromJsonString](InwardJobOutwardItemsSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobOutwardItemsSearchRequest**(`data?`): [`InwardJobOutwardItemsSearchRequest`](InwardJobOutwardItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobOutwardItemsSearchRequest`](InwardJobOutwardItemsSearchRequest.md)\> |

#### Returns

[`InwardJobOutwardItemsSearchRequest`](InwardJobOutwardItemsSearchRequest.md)

#### Overrides

Message\&lt;InwardJobOutwardItemsSearchRequest\&gt;.constructor

#### Defined in

[src/inward_jobs.scailo_pb.ts:3874](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L3874)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 12;

#### Defined in

[src/inward_jobs.scailo_pb.ts:3798](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L3798)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 11;

#### Defined in

[src/inward_jobs.scailo_pb.ts:3791](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L3791)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 10;

#### Defined in

[src/inward_jobs.scailo_pb.ts:3784](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L3784)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 13;

#### Defined in

[src/inward_jobs.scailo_pb.ts:3805](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L3805)

___

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

------------------------------------------
Extra filters
The ID of the associated buyer client

------------------------------------------

**`Generated`**

from field: uint64 buyer_client_id = 200;

#### Defined in

[src/inward_jobs.scailo_pb.ts:3872](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L3872)

___

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

Stores the family code as given by the client

**`Generated`**

from field: string client_family_code = 25;

#### Defined in

[src/inward_jobs.scailo_pb.ts:3833](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L3833)

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

The ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 23;

#### Defined in

[src/inward_jobs.scailo_pb.ts:3826](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L3826)

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

[src/inward_jobs.scailo_pb.ts:3716](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L3716)

___

### deliveryDateEnd

• **deliveryDateEnd**: `string` = `""`

The end delivery date of the item in the inward job

**`Generated`**

from field: string delivery_date_end = 28;

#### Defined in

[src/inward_jobs.scailo_pb.ts:3854](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L3854)

___

### deliveryDateExact

• **deliveryDateExact**: `string` = `""`

The exact delivery date of the item in the inward job

**`Generated`**

from field: string delivery_date_exact = 26;

#### Defined in

[src/inward_jobs.scailo_pb.ts:3840](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L3840)

___

### deliveryDateStart

• **deliveryDateStart**: `string` = `""`

The start delivery date of the item in the inward job

**`Generated`**

from field: string delivery_date_start = 27;

#### Defined in

[src/inward_jobs.scailo_pb.ts:3847](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L3847)

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

[src/inward_jobs.scailo_pb.ts:3770](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L3770)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 21;

#### Defined in

[src/inward_jobs.scailo_pb.ts:3819](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L3819)

___

### inwardJobId

• **inwardJobId**: `bigint` = `protoInt64.zero`

The ID of the inward job

**`Generated`**

from field: uint64 inward_job_id = 20;

#### Defined in

[src/inward_jobs.scailo_pb.ts:3812](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L3812)

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

[src/inward_jobs.scailo_pb.ts:3700](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L3700)

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

[src/inward_jobs.scailo_pb.ts:3732](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L3732)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

[src/inward_jobs.scailo_pb.ts:3861](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L3861)

___

### sortKey

• **sortKey**: [`INWARD_JOB_OUTWARD_ITEM_SORT_KEY`](../enums/INWARD_JOB_OUTWARD_ITEM_SORT_KEY.md) = `INWARD_JOB_OUTWARD_ITEM_SORT_KEY.INWARD_JOB_OUTWARD_ITEM_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.INWARD_JOB_OUTWARD_ITEM_SORT_KEY sort_key = 5;

#### Defined in

[src/inward_jobs.scailo_pb.ts:3754](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L3754)

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

[src/inward_jobs.scailo_pb.ts:3744](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L3744)

___

### status

• **status**: [`INWARD_JOB_OUTWARD_ITEM_STATUS`](../enums/INWARD_JOB_OUTWARD_ITEM_STATUS.md) = `INWARD_JOB_OUTWARD_ITEM_STATUS.INWARD_JOB_OUTWARD_ITEM_STATUS_ANY_UNSPECIFIED`

The status of the items

**`Generated`**

from field: Scailo.INWARD_JOB_OUTWARD_ITEM_STATUS status = 7;

#### Defined in

[src/inward_jobs.scailo_pb.ts:3777](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L3777)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/inward_jobs.scailo_pb.ts:3881](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L3881)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/inward_jobs.scailo_pb.ts:3879](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L3879)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobOutwardItemsSearchRequest"``

#### Defined in

[src/inward_jobs.scailo_pb.ts:3880](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L3880)

## Methods

### clone

▸ **clone**(): [`InwardJobOutwardItemsSearchRequest`](InwardJobOutwardItemsSearchRequest.md)

Create a deep copy.

#### Returns

[`InwardJobOutwardItemsSearchRequest`](InwardJobOutwardItemsSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobOutwardItemsSearchRequest`](InwardJobOutwardItemsSearchRequest.md) \| `PlainMessage`\<[`InwardJobOutwardItemsSearchRequest`](InwardJobOutwardItemsSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobOutwardItemsSearchRequest`](InwardJobOutwardItemsSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobOutwardItemsSearchRequest`](InwardJobOutwardItemsSearchRequest.md)\>

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
| `a` | `undefined` \| [`InwardJobOutwardItemsSearchRequest`](InwardJobOutwardItemsSearchRequest.md) \| `PlainMessage`\<[`InwardJobOutwardItemsSearchRequest`](InwardJobOutwardItemsSearchRequest.md)\> |
| `b` | `undefined` \| [`InwardJobOutwardItemsSearchRequest`](InwardJobOutwardItemsSearchRequest.md) \| `PlainMessage`\<[`InwardJobOutwardItemsSearchRequest`](InwardJobOutwardItemsSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/inward_jobs.scailo_pb.ts:3916](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L3916)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobOutwardItemsSearchRequest`](InwardJobOutwardItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobOutwardItemsSearchRequest`](InwardJobOutwardItemsSearchRequest.md)

#### Defined in

[src/inward_jobs.scailo_pb.ts:3904](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L3904)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobOutwardItemsSearchRequest`](InwardJobOutwardItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobOutwardItemsSearchRequest`](InwardJobOutwardItemsSearchRequest.md)

#### Defined in

[src/inward_jobs.scailo_pb.ts:3908](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L3908)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobOutwardItemsSearchRequest`](InwardJobOutwardItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobOutwardItemsSearchRequest`](InwardJobOutwardItemsSearchRequest.md)

#### Defined in

[src/inward_jobs.scailo_pb.ts:3912](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L3912)
