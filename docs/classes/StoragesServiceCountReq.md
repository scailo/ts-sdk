[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StoragesServiceCountReq

# Class: StoragesServiceCountReq

Target filter request for counting storage records matching specific logical criteria.
This message encapsulates lifecycle status filters, timestamp ranges, workflow markers,
and entity references to determine the total size of a targeted dataset.

**Note:** This is the primary message layout used by backend calculation engines, reporting
services, and frontend pagination headers to evaluate total record matches dynamically
before or alongside retrieving paginated results.

**`Generated`**

from message Scailo.StoragesServiceCountReq

## Hierarchy

- `Message`\<[`StoragesServiceCountReq`](StoragesServiceCountReq.md)\>

  ↳ **`StoragesServiceCountReq`**

## Table of contents

### Constructors

- [constructor](StoragesServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](StoragesServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](StoragesServiceCountReq.md#approvedonend)
- [approvedOnStart](StoragesServiceCountReq.md#approvedonstart)
- [approverRoleId](StoragesServiceCountReq.md#approverroleid)
- [code](StoragesServiceCountReq.md#code)
- [creationTimestampEnd](StoragesServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](StoragesServiceCountReq.md#creationtimestampstart)
- [entityUuid](StoragesServiceCountReq.md#entityuuid)
- [familyId](StoragesServiceCountReq.md#familyid)
- [isActive](StoragesServiceCountReq.md#isactive)
- [isLeaf](StoragesServiceCountReq.md#isleaf)
- [modificationTimestampEnd](StoragesServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](StoragesServiceCountReq.md#modificationtimestampstart)
- [name](StoragesServiceCountReq.md#name)
- [parentStorageId](StoragesServiceCountReq.md#parentstorageid)
- [status](StoragesServiceCountReq.md#status)
- [storeId](StoragesServiceCountReq.md#storeid)
- [fields](StoragesServiceCountReq.md#fields)
- [runtime](StoragesServiceCountReq.md#runtime)
- [typeName](StoragesServiceCountReq.md#typename)

### Methods

- [clone](StoragesServiceCountReq.md#clone)
- [equals](StoragesServiceCountReq.md#equals)
- [fromBinary](StoragesServiceCountReq.md#frombinary)
- [fromJson](StoragesServiceCountReq.md#fromjson)
- [fromJsonString](StoragesServiceCountReq.md#fromjsonstring)
- [getType](StoragesServiceCountReq.md#gettype)
- [toBinary](StoragesServiceCountReq.md#tobinary)
- [toJSON](StoragesServiceCountReq.md#tojson)
- [toJson](StoragesServiceCountReq.md#tojson-1)
- [toJsonString](StoragesServiceCountReq.md#tojsonstring)
- [equals](StoragesServiceCountReq.md#equals-1)
- [fromBinary](StoragesServiceCountReq.md#frombinary-1)
- [fromJson](StoragesServiceCountReq.md#fromjson-1)
- [fromJsonString](StoragesServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new StoragesServiceCountReq**(`data?`): [`StoragesServiceCountReq`](StoragesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StoragesServiceCountReq`](StoragesServiceCountReq.md)\> |

#### Returns

[`StoragesServiceCountReq`](StoragesServiceCountReq.md)

#### Overrides

Message\&lt;StoragesServiceCountReq\&gt;.constructor

#### Defined in

[src/storages.scailo_pb.ts:1413](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L1413)

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

[src/storages.scailo_pb.ts:1301](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L1301)

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

[src/storages.scailo_pb.ts:1285](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L1285)

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

[src/storages.scailo_pb.ts:1269](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L1269)

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

[src/storages.scailo_pb.ts:1317](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L1317)

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

[src/storages.scailo_pb.ts:1349](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L1349)

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

[src/storages.scailo_pb.ts:1193](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L1193)

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

[src/storages.scailo_pb.ts:1177](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L1177)

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

[src/storages.scailo_pb.ts:1241](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L1241)

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

[src/storages.scailo_pb.ts:1411](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L1411)

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

[src/storages.scailo_pb.ts:1161](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L1161)

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

[src/storages.scailo_pb.ts:1395](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L1395)

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

[src/storages.scailo_pb.ts:1225](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L1225)

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

[src/storages.scailo_pb.ts:1209](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L1209)

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

[src/storages.scailo_pb.ts:1333](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L1333)

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

[src/storages.scailo_pb.ts:1381](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L1381)

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

[src/storages.scailo_pb.ts:1253](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L1253)

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

[src/storages.scailo_pb.ts:1365](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L1365)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/storages.scailo_pb.ts:1420](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L1420)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/storages.scailo_pb.ts:1418](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L1418)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StoragesServiceCountReq"``

#### Defined in

[src/storages.scailo_pb.ts:1419](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L1419)

## Methods

### clone

▸ **clone**(): [`StoragesServiceCountReq`](StoragesServiceCountReq.md)

Create a deep copy.

#### Returns

[`StoragesServiceCountReq`](StoragesServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`StoragesServiceCountReq`](StoragesServiceCountReq.md) \| `PlainMessage`\<[`StoragesServiceCountReq`](StoragesServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`StoragesServiceCountReq`](StoragesServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StoragesServiceCountReq`](StoragesServiceCountReq.md)\>

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
| `a` | `undefined` \| [`StoragesServiceCountReq`](StoragesServiceCountReq.md) \| `PlainMessage`\<[`StoragesServiceCountReq`](StoragesServiceCountReq.md)\> |
| `b` | `undefined` \| [`StoragesServiceCountReq`](StoragesServiceCountReq.md) \| `PlainMessage`\<[`StoragesServiceCountReq`](StoragesServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/storages.scailo_pb.ts:1452](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L1452)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StoragesServiceCountReq`](StoragesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StoragesServiceCountReq`](StoragesServiceCountReq.md)

#### Defined in

[src/storages.scailo_pb.ts:1440](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L1440)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StoragesServiceCountReq`](StoragesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StoragesServiceCountReq`](StoragesServiceCountReq.md)

#### Defined in

[src/storages.scailo_pb.ts:1444](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L1444)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StoragesServiceCountReq`](StoragesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StoragesServiceCountReq`](StoragesServiceCountReq.md)

#### Defined in

[src/storages.scailo_pb.ts:1448](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L1448)
