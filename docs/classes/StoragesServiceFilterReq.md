[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StoragesServiceFilterReq

# Class: StoragesServiceFilterReq

Advanced filter request for searching and paginating storages using multiple logical criteria.
This message encapsulates pagination controls, sorting keys, lifecycle status filters,
timestamp ranges, and entity references.

**Note:** This is the primary message layout used by the frontend and external API clients
to build robust data-table queries, reporting views, and targeted record lookups.

**`Generated`**

from message Scailo.StoragesServiceFilterReq

## Hierarchy

- `Message`\<[`StoragesServiceFilterReq`](StoragesServiceFilterReq.md)\>

  ↳ **`StoragesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](StoragesServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](StoragesServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](StoragesServiceFilterReq.md#approvedonend)
- [approvedOnStart](StoragesServiceFilterReq.md#approvedonstart)
- [approverRoleId](StoragesServiceFilterReq.md#approverroleid)
- [code](StoragesServiceFilterReq.md#code)
- [count](StoragesServiceFilterReq.md#count)
- [creationTimestampEnd](StoragesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](StoragesServiceFilterReq.md#creationtimestampstart)
- [entityUuid](StoragesServiceFilterReq.md#entityuuid)
- [familyId](StoragesServiceFilterReq.md#familyid)
- [isActive](StoragesServiceFilterReq.md#isactive)
- [isLeaf](StoragesServiceFilterReq.md#isleaf)
- [modificationTimestampEnd](StoragesServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](StoragesServiceFilterReq.md#modificationtimestampstart)
- [name](StoragesServiceFilterReq.md#name)
- [offset](StoragesServiceFilterReq.md#offset)
- [parentStorageId](StoragesServiceFilterReq.md#parentstorageid)
- [sortKey](StoragesServiceFilterReq.md#sortkey)
- [sortOrder](StoragesServiceFilterReq.md#sortorder)
- [status](StoragesServiceFilterReq.md#status)
- [storeId](StoragesServiceFilterReq.md#storeid)
- [fields](StoragesServiceFilterReq.md#fields)
- [runtime](StoragesServiceFilterReq.md#runtime)
- [typeName](StoragesServiceFilterReq.md#typename)

### Methods

- [clone](StoragesServiceFilterReq.md#clone)
- [equals](StoragesServiceFilterReq.md#equals)
- [fromBinary](StoragesServiceFilterReq.md#frombinary)
- [fromJson](StoragesServiceFilterReq.md#fromjson)
- [fromJsonString](StoragesServiceFilterReq.md#fromjsonstring)
- [getType](StoragesServiceFilterReq.md#gettype)
- [toBinary](StoragesServiceFilterReq.md#tobinary)
- [toJSON](StoragesServiceFilterReq.md#tojson)
- [toJson](StoragesServiceFilterReq.md#tojson-1)
- [toJsonString](StoragesServiceFilterReq.md#tojsonstring)
- [equals](StoragesServiceFilterReq.md#equals-1)
- [fromBinary](StoragesServiceFilterReq.md#frombinary-1)
- [fromJson](StoragesServiceFilterReq.md#fromjson-1)
- [fromJsonString](StoragesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new StoragesServiceFilterReq**(`data?`): [`StoragesServiceFilterReq`](StoragesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StoragesServiceFilterReq`](StoragesServiceFilterReq.md)\> |

#### Returns

[`StoragesServiceFilterReq`](StoragesServiceFilterReq.md)

#### Overrides

Message\&lt;StoragesServiceFilterReq\&gt;.constructor

#### Defined in

[src/storages.scailo_pb.ts:1090](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/storages.scailo_pb.ts#L1090)

## Properties

### approvedByUserId

• `Optional` **approvedByUserId**: `bigint`

**`Optional`**

**`Description`**

Filter by the specific user ID who approved the records.

**`Example`**

```ts
501
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 approved_by_user_id = 13;

#### Defined in

[src/storages.scailo_pb.ts:978](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/storages.scailo_pb.ts#L978)

___

### approvedOnEnd

• `Optional` **approvedOnEnd**: `bigint`

**`Optional`**

**`Description`**

Filter records approved ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 approved_on_end = 12;

#### Defined in

[src/storages.scailo_pb.ts:962](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/storages.scailo_pb.ts#L962)

___

### approvedOnStart

• `Optional` **approvedOnStart**: `bigint`

**`Optional`**

**`Description`**

Filter records approved ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 approved_on_start = 11;

#### Defined in

[src/storages.scailo_pb.ts:946](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/storages.scailo_pb.ts#L946)

___

### approverRoleId

• `Optional` **approverRoleId**: `bigint`

**`Optional`**

**`Description`**

Filter by the role ID of the approver.

**`Example`**

```ts
5
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 approver_role_id = 14;

#### Defined in

[src/storages.scailo_pb.ts:994](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/storages.scailo_pb.ts#L994)

___

### code

• `Optional` **code**: `string`

**`Optional`**

**`Description`**

The unique code or internal alphanumeric token used to classify the storage unit for inventory tracking.

**`Example`**

```ts
"STRG-CS-A01"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string code = 21;

#### Defined in

[src/storages.scailo_pb.ts:1026](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/storages.scailo_pb.ts#L1026)

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

[src/storages.scailo_pb.ts:800](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/storages.scailo_pb.ts#L800)

___

### creationTimestampEnd

• `Optional` **creationTimestampEnd**: `bigint`

**`Optional`**

**`Description`**

Filter records created ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 creation_timestamp_end = 102;

#### Defined in

[src/storages.scailo_pb.ts:870](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/storages.scailo_pb.ts#L870)

___

### creationTimestampStart

• `Optional` **creationTimestampStart**: `bigint`

**`Optional`**

**`Description`**

Filter records created ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 creation_timestamp_start = 101;

#### Defined in

[src/storages.scailo_pb.ts:854](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/storages.scailo_pb.ts#L854)

___

### entityUuid

• `Optional` **entityUuid**: `string`

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

from field: optional string entity_uuid = 8;

#### Defined in

[src/storages.scailo_pb.ts:918](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/storages.scailo_pb.ts#L918)

___

### familyId

• `Optional` **familyId**: `bigint`

**`Optional`**

**`Description`**

Filter results to retrieve only the storages that are assigned to a specific item family or classification group identifier.

**`Example`**

```ts
7890
```

**`Regex`**

^[0-9]*$

**`Format`**

Non-negative 64-bit integer.

**`Generated`**

from field: optional uint64 family_id = 30;

#### Defined in

[src/storages.scailo_pb.ts:1088](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/storages.scailo_pb.ts#L1088)

___

### isActive

• `Optional` **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md)

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: optional Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/storages.scailo_pb.ts:784](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/storages.scailo_pb.ts#L784)

___

### isLeaf

• `Optional` **isLeaf**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md)

**`Optional`**

**`Description`**

Flag determining whether this storage node is a terminal 'leaf' allocation (e.g., a specific shelf/bin holding stock) or a 'non-leaf' grouping structure (e.g., a whole aisle).

**`Example`**

```ts
true
```

**`Format`**

Boolean value (`true` or `false`).

**`Generated`**

from field: optional Scailo.BOOL_FILTER is_leaf = 24;

#### Defined in

[src/storages.scailo_pb.ts:1072](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/storages.scailo_pb.ts#L1072)

___

### modificationTimestampEnd

• `Optional` **modificationTimestampEnd**: `bigint`

**`Optional`**

**`Description`**

Filter records modified ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 modification_timestamp_end = 104;

#### Defined in

[src/storages.scailo_pb.ts:902](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/storages.scailo_pb.ts#L902)

___

### modificationTimestampStart

• `Optional` **modificationTimestampStart**: `bigint`

**`Optional`**

**`Description`**

Filter records modified ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 modification_timestamp_start = 103;

#### Defined in

[src/storages.scailo_pb.ts:886](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/storages.scailo_pb.ts#L886)

___

### name

• `Optional` **name**: `string`

**`Optional`**

**`Description`**

The official or friendly descriptive name of the storage zone or unit.

**`Example`**

```ts
"Cold Storage Vault Alpha"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string name = 20;

#### Defined in

[src/storages.scailo_pb.ts:1010](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/storages.scailo_pb.ts#L1010)

___

### offset

• `Optional` **offset**: `bigint`

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

from field: optional uint64 offset = 3;

#### Defined in

[src/storages.scailo_pb.ts:816](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/storages.scailo_pb.ts#L816)

___

### parentStorageId

• `Optional` **parentStorageId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the parent non-leaf storage unit. Defaults to 0 if this is the root node or top-level layer within the storage area.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]*$

**`Format`**

Non-negative 64-bit integer.

**`Generated`**

from field: optional uint64 parent_storage_id = 23;

#### Defined in

[src/storages.scailo_pb.ts:1058](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/storages.scailo_pb.ts#L1058)

___

### sortKey

• `Optional` **sortKey**: [`STORAGE_SORT_KEY`](../enums/STORAGE_SORT_KEY.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.STORAGE_SORT_KEY sort_key = 5;

#### Defined in

[src/storages.scailo_pb.ts:838](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/storages.scailo_pb.ts#L838)

___

### sortOrder

• `Optional` **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md)

**`Optional`**

**`Description`**

Sort direction.

**`Example`**

```ts
DESCENDING
```

**`Generated`**

from field: optional Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/storages.scailo_pb.ts:828](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/storages.scailo_pb.ts#L828)

___

### status

• `Optional` **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md)

**`Optional`**

**`Description`**

Filter by lifecycle status (e.g., DRAFT, STANDING).

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/storages.scailo_pb.ts:930](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/storages.scailo_pb.ts#L930)

___

### storeId

• `Optional` **storeId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the overarching parent store facility housing this storage unit.

**`Example`**

```ts
4501
```

**`Regex`**

^[0-9]*$

**`Format`**

Non-negative 64-bit integer greater than zero.

**`Generated`**

from field: optional uint64 store_id = 22;

#### Defined in

[src/storages.scailo_pb.ts:1042](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/storages.scailo_pb.ts#L1042)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/storages.scailo_pb.ts:1097](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/storages.scailo_pb.ts#L1097)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/storages.scailo_pb.ts:1095](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/storages.scailo_pb.ts#L1095)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StoragesServiceFilterReq"``

#### Defined in

[src/storages.scailo_pb.ts:1096](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/storages.scailo_pb.ts#L1096)

## Methods

### clone

▸ **clone**(): [`StoragesServiceFilterReq`](StoragesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`StoragesServiceFilterReq`](StoragesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`StoragesServiceFilterReq`](StoragesServiceFilterReq.md) \| `PlainMessage`\<[`StoragesServiceFilterReq`](StoragesServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`StoragesServiceFilterReq`](StoragesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StoragesServiceFilterReq`](StoragesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`StoragesServiceFilterReq`](StoragesServiceFilterReq.md) \| `PlainMessage`\<[`StoragesServiceFilterReq`](StoragesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`StoragesServiceFilterReq`](StoragesServiceFilterReq.md) \| `PlainMessage`\<[`StoragesServiceFilterReq`](StoragesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/storages.scailo_pb.ts:1133](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/storages.scailo_pb.ts#L1133)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StoragesServiceFilterReq`](StoragesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StoragesServiceFilterReq`](StoragesServiceFilterReq.md)

#### Defined in

[src/storages.scailo_pb.ts:1121](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/storages.scailo_pb.ts#L1121)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StoragesServiceFilterReq`](StoragesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StoragesServiceFilterReq`](StoragesServiceFilterReq.md)

#### Defined in

[src/storages.scailo_pb.ts:1125](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/storages.scailo_pb.ts#L1125)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StoragesServiceFilterReq`](StoragesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StoragesServiceFilterReq`](StoragesServiceFilterReq.md)

#### Defined in

[src/storages.scailo_pb.ts:1129](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/storages.scailo_pb.ts#L1129)
