[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobInwardItemsSearchRequest

# Class: InwardJobInwardItemsSearchRequest

Describes the request payload to retrieve approved or unapproved items.

**`Generated`**

from message Scailo.InwardJobInwardItemsSearchRequest

## Hierarchy

- `Message`\<[`InwardJobInwardItemsSearchRequest`](InwardJobInwardItemsSearchRequest.md)\>

  ↳ **`InwardJobInwardItemsSearchRequest`**

## Table of contents

### Constructors

- [constructor](InwardJobInwardItemsSearchRequest.md#constructor)

### Properties

- [approvedByUserId](InwardJobInwardItemsSearchRequest.md#approvedbyuserid)
- [approvedOnEnd](InwardJobInwardItemsSearchRequest.md#approvedonend)
- [approvedOnStart](InwardJobInwardItemsSearchRequest.md#approvedonstart)
- [approverRoleId](InwardJobInwardItemsSearchRequest.md#approverroleid)
- [buyerClientId](InwardJobInwardItemsSearchRequest.md#buyerclientid)
- [clientFamilyCode](InwardJobInwardItemsSearchRequest.md#clientfamilycode)
- [clientUomId](InwardJobInwardItemsSearchRequest.md#clientuomid)
- [count](InwardJobInwardItemsSearchRequest.md#count)
- [entityUuid](InwardJobInwardItemsSearchRequest.md#entityuuid)
- [familyId](InwardJobInwardItemsSearchRequest.md#familyid)
- [inwardJobId](InwardJobInwardItemsSearchRequest.md#inwardjobid)
- [isActive](InwardJobInwardItemsSearchRequest.md#isactive)
- [offset](InwardJobInwardItemsSearchRequest.md#offset)
- [searchKey](InwardJobInwardItemsSearchRequest.md#searchkey)
- [sortKey](InwardJobInwardItemsSearchRequest.md#sortkey)
- [sortOrder](InwardJobInwardItemsSearchRequest.md#sortorder)
- [status](InwardJobInwardItemsSearchRequest.md#status)
- [fields](InwardJobInwardItemsSearchRequest.md#fields)
- [runtime](InwardJobInwardItemsSearchRequest.md#runtime)
- [typeName](InwardJobInwardItemsSearchRequest.md#typename)

### Methods

- [clone](InwardJobInwardItemsSearchRequest.md#clone)
- [equals](InwardJobInwardItemsSearchRequest.md#equals)
- [fromBinary](InwardJobInwardItemsSearchRequest.md#frombinary)
- [fromJson](InwardJobInwardItemsSearchRequest.md#fromjson)
- [fromJsonString](InwardJobInwardItemsSearchRequest.md#fromjsonstring)
- [getType](InwardJobInwardItemsSearchRequest.md#gettype)
- [toBinary](InwardJobInwardItemsSearchRequest.md#tobinary)
- [toJSON](InwardJobInwardItemsSearchRequest.md#tojson)
- [toJson](InwardJobInwardItemsSearchRequest.md#tojson-1)
- [toJsonString](InwardJobInwardItemsSearchRequest.md#tojsonstring)
- [equals](InwardJobInwardItemsSearchRequest.md#equals-1)
- [fromBinary](InwardJobInwardItemsSearchRequest.md#frombinary-1)
- [fromJson](InwardJobInwardItemsSearchRequest.md#fromjson-1)
- [fromJsonString](InwardJobInwardItemsSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobInwardItemsSearchRequest**(`data?`): [`InwardJobInwardItemsSearchRequest`](InwardJobInwardItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobInwardItemsSearchRequest`](InwardJobInwardItemsSearchRequest.md)\> |

#### Returns

[`InwardJobInwardItemsSearchRequest`](InwardJobInwardItemsSearchRequest.md)

#### Overrides

Message\&lt;InwardJobInwardItemsSearchRequest\&gt;.constructor

#### Defined in

[src/inward_jobs.scailo_pb.ts:2925](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L2925)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 12;

#### Defined in

[src/inward_jobs.scailo_pb.ts:2870](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L2870)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 11;

#### Defined in

[src/inward_jobs.scailo_pb.ts:2863](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L2863)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 10;

#### Defined in

[src/inward_jobs.scailo_pb.ts:2856](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L2856)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 13;

#### Defined in

[src/inward_jobs.scailo_pb.ts:2877](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L2877)

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

[src/inward_jobs.scailo_pb.ts:2923](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L2923)

___

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

Stores the family code as given by the client

**`Generated`**

from field: string client_family_code = 25;

#### Defined in

[src/inward_jobs.scailo_pb.ts:2905](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L2905)

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

The ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 23;

#### Defined in

[src/inward_jobs.scailo_pb.ts:2898](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L2898)

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

[src/inward_jobs.scailo_pb.ts:2788](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L2788)

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

[src/inward_jobs.scailo_pb.ts:2842](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L2842)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 21;

#### Defined in

[src/inward_jobs.scailo_pb.ts:2891](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L2891)

___

### inwardJobId

• **inwardJobId**: `bigint` = `protoInt64.zero`

The ID of the inward job

**`Generated`**

from field: uint64 inward_job_id = 20;

#### Defined in

[src/inward_jobs.scailo_pb.ts:2884](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L2884)

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

[src/inward_jobs.scailo_pb.ts:2772](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L2772)

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

[src/inward_jobs.scailo_pb.ts:2804](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L2804)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

[src/inward_jobs.scailo_pb.ts:2912](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L2912)

___

### sortKey

• **sortKey**: [`INWARD_JOB_INWARD_ITEM_SORT_KEY`](../enums/INWARD_JOB_INWARD_ITEM_SORT_KEY.md) = `INWARD_JOB_INWARD_ITEM_SORT_KEY.INWARD_JOB_INWARD_ITEM_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.INWARD_JOB_INWARD_ITEM_SORT_KEY sort_key = 5;

#### Defined in

[src/inward_jobs.scailo_pb.ts:2826](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L2826)

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

[src/inward_jobs.scailo_pb.ts:2816](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L2816)

___

### status

• **status**: [`INWARD_JOB_INWARD_ITEM_STATUS`](../enums/INWARD_JOB_INWARD_ITEM_STATUS.md) = `INWARD_JOB_INWARD_ITEM_STATUS.INWARD_JOB_INWARD_ITEM_STATUS_ANY_UNSPECIFIED`

The status of the items

**`Generated`**

from field: Scailo.INWARD_JOB_INWARD_ITEM_STATUS status = 7;

#### Defined in

[src/inward_jobs.scailo_pb.ts:2849](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L2849)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/inward_jobs.scailo_pb.ts:2932](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L2932)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/inward_jobs.scailo_pb.ts:2930](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L2930)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobInwardItemsSearchRequest"``

#### Defined in

[src/inward_jobs.scailo_pb.ts:2931](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L2931)

## Methods

### clone

▸ **clone**(): [`InwardJobInwardItemsSearchRequest`](InwardJobInwardItemsSearchRequest.md)

Create a deep copy.

#### Returns

[`InwardJobInwardItemsSearchRequest`](InwardJobInwardItemsSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobInwardItemsSearchRequest`](InwardJobInwardItemsSearchRequest.md) \| `PlainMessage`\<[`InwardJobInwardItemsSearchRequest`](InwardJobInwardItemsSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobInwardItemsSearchRequest`](InwardJobInwardItemsSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobInwardItemsSearchRequest`](InwardJobInwardItemsSearchRequest.md)\>

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
| `a` | `undefined` \| [`InwardJobInwardItemsSearchRequest`](InwardJobInwardItemsSearchRequest.md) \| `PlainMessage`\<[`InwardJobInwardItemsSearchRequest`](InwardJobInwardItemsSearchRequest.md)\> |
| `b` | `undefined` \| [`InwardJobInwardItemsSearchRequest`](InwardJobInwardItemsSearchRequest.md) \| `PlainMessage`\<[`InwardJobInwardItemsSearchRequest`](InwardJobInwardItemsSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/inward_jobs.scailo_pb.ts:2964](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L2964)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobInwardItemsSearchRequest`](InwardJobInwardItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobInwardItemsSearchRequest`](InwardJobInwardItemsSearchRequest.md)

#### Defined in

[src/inward_jobs.scailo_pb.ts:2952](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L2952)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobInwardItemsSearchRequest`](InwardJobInwardItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobInwardItemsSearchRequest`](InwardJobInwardItemsSearchRequest.md)

#### Defined in

[src/inward_jobs.scailo_pb.ts:2956](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L2956)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobInwardItemsSearchRequest`](InwardJobInwardItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobInwardItemsSearchRequest`](InwardJobInwardItemsSearchRequest.md)

#### Defined in

[src/inward_jobs.scailo_pb.ts:2960](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/inward_jobs.scailo_pb.ts#L2960)
