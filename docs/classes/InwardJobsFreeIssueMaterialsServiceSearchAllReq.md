[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobsFreeIssueMaterialsServiceSearchAllReq

# Class: InwardJobsFreeIssueMaterialsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.InwardJobsFreeIssueMaterialsServiceSearchAllReq

## Hierarchy

- `Message`\<[`InwardJobsFreeIssueMaterialsServiceSearchAllReq`](InwardJobsFreeIssueMaterialsServiceSearchAllReq.md)\>

  ↳ **`InwardJobsFreeIssueMaterialsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](InwardJobsFreeIssueMaterialsServiceSearchAllReq.md#constructor)

### Properties

- [count](InwardJobsFreeIssueMaterialsServiceSearchAllReq.md#count)
- [entityUuid](InwardJobsFreeIssueMaterialsServiceSearchAllReq.md#entityuuid)
- [isActive](InwardJobsFreeIssueMaterialsServiceSearchAllReq.md#isactive)
- [offset](InwardJobsFreeIssueMaterialsServiceSearchAllReq.md#offset)
- [refFrom](InwardJobsFreeIssueMaterialsServiceSearchAllReq.md#reffrom)
- [refId](InwardJobsFreeIssueMaterialsServiceSearchAllReq.md#refid)
- [searchKey](InwardJobsFreeIssueMaterialsServiceSearchAllReq.md#searchkey)
- [sortKey](InwardJobsFreeIssueMaterialsServiceSearchAllReq.md#sortkey)
- [sortOrder](InwardJobsFreeIssueMaterialsServiceSearchAllReq.md#sortorder)
- [status](InwardJobsFreeIssueMaterialsServiceSearchAllReq.md#status)
- [fields](InwardJobsFreeIssueMaterialsServiceSearchAllReq.md#fields)
- [runtime](InwardJobsFreeIssueMaterialsServiceSearchAllReq.md#runtime)
- [typeName](InwardJobsFreeIssueMaterialsServiceSearchAllReq.md#typename)

### Methods

- [clone](InwardJobsFreeIssueMaterialsServiceSearchAllReq.md#clone)
- [equals](InwardJobsFreeIssueMaterialsServiceSearchAllReq.md#equals)
- [fromBinary](InwardJobsFreeIssueMaterialsServiceSearchAllReq.md#frombinary)
- [fromJson](InwardJobsFreeIssueMaterialsServiceSearchAllReq.md#fromjson)
- [fromJsonString](InwardJobsFreeIssueMaterialsServiceSearchAllReq.md#fromjsonstring)
- [getType](InwardJobsFreeIssueMaterialsServiceSearchAllReq.md#gettype)
- [toBinary](InwardJobsFreeIssueMaterialsServiceSearchAllReq.md#tobinary)
- [toJSON](InwardJobsFreeIssueMaterialsServiceSearchAllReq.md#tojson)
- [toJson](InwardJobsFreeIssueMaterialsServiceSearchAllReq.md#tojson-1)
- [toJsonString](InwardJobsFreeIssueMaterialsServiceSearchAllReq.md#tojsonstring)
- [equals](InwardJobsFreeIssueMaterialsServiceSearchAllReq.md#equals-1)
- [fromBinary](InwardJobsFreeIssueMaterialsServiceSearchAllReq.md#frombinary-1)
- [fromJson](InwardJobsFreeIssueMaterialsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](InwardJobsFreeIssueMaterialsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobsFreeIssueMaterialsServiceSearchAllReq**(`data?`): [`InwardJobsFreeIssueMaterialsServiceSearchAllReq`](InwardJobsFreeIssueMaterialsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobsFreeIssueMaterialsServiceSearchAllReq`](InwardJobsFreeIssueMaterialsServiceSearchAllReq.md)\> |

#### Returns

[`InwardJobsFreeIssueMaterialsServiceSearchAllReq`](InwardJobsFreeIssueMaterialsServiceSearchAllReq.md)

#### Overrides

Message\&lt;InwardJobsFreeIssueMaterialsServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:2600](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inward_jobs_free_issue_materials.scailo_pb.ts#L2600)

## Properties

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

[src/inward_jobs_free_issue_materials.scailo_pb.ts:2502](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inward_jobs_free_issue_materials.scailo_pb.ts#L2502)

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

[src/inward_jobs_free_issue_materials.scailo_pb.ts:2556](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inward_jobs_free_issue_materials.scailo_pb.ts#L2556)

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

[src/inward_jobs_free_issue_materials.scailo_pb.ts:2486](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inward_jobs_free_issue_materials.scailo_pb.ts#L2486)

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

[src/inward_jobs_free_issue_materials.scailo_pb.ts:2518](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inward_jobs_free_issue_materials.scailo_pb.ts#L2518)

___

### refFrom

• **refFrom**: [`INWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM`](../enums/INWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM.md) = `INWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM.INWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.INWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM ref_from = 22;

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:2591](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inward_jobs_free_issue_materials.scailo_pb.ts#L2591)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:2598](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inward_jobs_free_issue_materials.scailo_pb.ts#L2598)

___

### searchKey

• **searchKey**: `string` = `""`

**`Mandatory`**

**`Description`**

The search string to match against reference IDs.

**`Example`**

```ts
"Medical 2023"
```

**`Regex`**

.*

@format: May contain any UTF-8 characters.

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:2584](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inward_jobs_free_issue_materials.scailo_pb.ts#L2584)

___

### sortKey

• **sortKey**: [`INWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY`](../enums/INWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY.md) = `INWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY.INWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.INWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY sort_key = 5;

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:2540](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inward_jobs_free_issue_materials.scailo_pb.ts#L2540)

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

[src/inward_jobs_free_issue_materials.scailo_pb.ts:2530](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inward_jobs_free_issue_materials.scailo_pb.ts#L2530)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by lifecycle status (e.g., DRAFT, STANDING).

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:2568](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inward_jobs_free_issue_materials.scailo_pb.ts#L2568)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:2607](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inward_jobs_free_issue_materials.scailo_pb.ts#L2607)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:2605](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inward_jobs_free_issue_materials.scailo_pb.ts#L2605)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobsFreeIssueMaterialsServiceSearchAllReq"``

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:2606](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inward_jobs_free_issue_materials.scailo_pb.ts#L2606)

## Methods

### clone

▸ **clone**(): [`InwardJobsFreeIssueMaterialsServiceSearchAllReq`](InwardJobsFreeIssueMaterialsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`InwardJobsFreeIssueMaterialsServiceSearchAllReq`](InwardJobsFreeIssueMaterialsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobsFreeIssueMaterialsServiceSearchAllReq`](InwardJobsFreeIssueMaterialsServiceSearchAllReq.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsServiceSearchAllReq`](InwardJobsFreeIssueMaterialsServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobsFreeIssueMaterialsServiceSearchAllReq`](InwardJobsFreeIssueMaterialsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobsFreeIssueMaterialsServiceSearchAllReq`](InwardJobsFreeIssueMaterialsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`InwardJobsFreeIssueMaterialsServiceSearchAllReq`](InwardJobsFreeIssueMaterialsServiceSearchAllReq.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsServiceSearchAllReq`](InwardJobsFreeIssueMaterialsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`InwardJobsFreeIssueMaterialsServiceSearchAllReq`](InwardJobsFreeIssueMaterialsServiceSearchAllReq.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsServiceSearchAllReq`](InwardJobsFreeIssueMaterialsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:2632](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inward_jobs_free_issue_materials.scailo_pb.ts#L2632)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobsFreeIssueMaterialsServiceSearchAllReq`](InwardJobsFreeIssueMaterialsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsServiceSearchAllReq`](InwardJobsFreeIssueMaterialsServiceSearchAllReq.md)

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:2620](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inward_jobs_free_issue_materials.scailo_pb.ts#L2620)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobsFreeIssueMaterialsServiceSearchAllReq`](InwardJobsFreeIssueMaterialsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsServiceSearchAllReq`](InwardJobsFreeIssueMaterialsServiceSearchAllReq.md)

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:2624](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inward_jobs_free_issue_materials.scailo_pb.ts#L2624)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobsFreeIssueMaterialsServiceSearchAllReq`](InwardJobsFreeIssueMaterialsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsServiceSearchAllReq`](InwardJobsFreeIssueMaterialsServiceSearchAllReq.md)

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:2628](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inward_jobs_free_issue_materials.scailo_pb.ts#L2628)
