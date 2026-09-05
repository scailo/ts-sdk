[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / Storage

# Class: Storage

Represents a full Storage within the system.

**`Generated`**

from message Scailo.Storage

## Hierarchy

- `Message`\<[`Storage`](Storage.md)\>

  ↳ **`Storage`**

## Table of contents

### Constructors

- [constructor](Storage.md#constructor)

### Properties

- [approvalMetadata](Storage.md#approvalmetadata)
- [code](Storage.md#code)
- [description](Storage.md#description)
- [entityUuid](Storage.md#entityuuid)
- [isLeaf](Storage.md#isleaf)
- [logs](Storage.md#logs)
- [metadata](Storage.md#metadata)
- [name](Storage.md#name)
- [parentStorageId](Storage.md#parentstorageid)
- [status](Storage.md#status)
- [storeId](Storage.md#storeid)
- [fields](Storage.md#fields)
- [runtime](Storage.md#runtime)
- [typeName](Storage.md#typename)

### Methods

- [clone](Storage.md#clone)
- [equals](Storage.md#equals)
- [fromBinary](Storage.md#frombinary)
- [fromJson](Storage.md#fromjson)
- [fromJsonString](Storage.md#fromjsonstring)
- [getType](Storage.md#gettype)
- [toBinary](Storage.md#tobinary)
- [toJSON](Storage.md#tojson)
- [toJson](Storage.md#tojson-1)
- [toJsonString](Storage.md#tojsonstring)
- [equals](Storage.md#equals-1)
- [fromBinary](Storage.md#frombinary-1)
- [fromJson](Storage.md#fromjson-1)
- [fromJsonString](Storage.md#fromjsonstring-1)

## Constructors

### constructor

• **new Storage**(`data?`): [`Storage`](Storage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`Storage`](Storage.md)\> |

#### Returns

[`Storage`](Storage.md)

#### Overrides

Message\&lt;Storage\&gt;.constructor

#### Defined in

[src/storages.scailo_pb.ts:488](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/storages.scailo_pb.ts#L488)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/storages.scailo_pb.ts:410](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/storages.scailo_pb.ts#L410)

___

### code

• **code**: `string` = `""`

**`Description`**

The unique code or internal alphanumeric token used to classify the storage unit for inventory tracking.

**`Example`**

```ts
"STRG-CS-A01"
```

**`Generated`**

from field: string code = 11;

#### Defined in

[src/storages.scailo_pb.ts:446](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/storages.scailo_pb.ts#L446)

___

### description

• **description**: `string` = `""`

**`Description`**

Contextual details concerning environmental constraints, structural capacities, or unique access instructions for this storage unit.

**`Example`**

```ts
"Maintained at temperature thresholds between 2-4°C. Holds standard pharmaceutical pallets."
```

**`Generated`**

from field: string description = 15;

#### Defined in

[src/storages.scailo_pb.ts:486](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/storages.scailo_pb.ts#L486)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Description`**

The organization's globally unique identifier.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/storages.scailo_pb.ts:394](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/storages.scailo_pb.ts#L394)

___

### isLeaf

• **isLeaf**: `boolean` = `false`

**`Description`**

Flag determining whether this storage node is a terminal 'leaf' allocation (e.g., a specific shelf/bin holding stock) or a 'non-leaf' grouping structure (e.g., a whole aisle).

**`Example`**

```ts
true
```

**`Generated`**

from field: bool is_leaf = 14;

#### Defined in

[src/storages.scailo_pb.ts:476](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/storages.scailo_pb.ts#L476)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/storages.scailo_pb.ts:426](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/storages.scailo_pb.ts#L426)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/storages.scailo_pb.ts:402](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/storages.scailo_pb.ts#L402)

___

### name

• **name**: `string` = `""`

**`Description`**

The official or friendly descriptive name of the storage zone or unit.

**`Example`**

```ts
"Cold Storage Vault Alpha"
```

**`Generated`**

from field: string name = 10;

#### Defined in

[src/storages.scailo_pb.ts:436](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/storages.scailo_pb.ts#L436)

___

### parentStorageId

• **parentStorageId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the parent non-leaf storage unit. Defaults to 0 if this is the root node or top-level layer within the storage area.

**`Example`**

```ts
1024
```

**`Generated`**

from field: uint64 parent_storage_id = 13;

#### Defined in

[src/storages.scailo_pb.ts:466](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/storages.scailo_pb.ts#L466)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/storages.scailo_pb.ts:418](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/storages.scailo_pb.ts#L418)

___

### storeId

• **storeId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the overarching parent store facility housing this storage unit.

**`Example`**

```ts
4501
```

**`Generated`**

from field: uint64 store_id = 12;

#### Defined in

[src/storages.scailo_pb.ts:456](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/storages.scailo_pb.ts#L456)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/storages.scailo_pb.ts:495](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/storages.scailo_pb.ts#L495)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/storages.scailo_pb.ts:493](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/storages.scailo_pb.ts#L493)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.Storage"``

#### Defined in

[src/storages.scailo_pb.ts:494](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/storages.scailo_pb.ts#L494)

## Methods

### clone

▸ **clone**(): [`Storage`](Storage.md)

Create a deep copy.

#### Returns

[`Storage`](Storage.md)

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
| `other` | `undefined` \| ``null`` \| [`Storage`](Storage.md) \| `PlainMessage`\<[`Storage`](Storage.md)\> |

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

▸ **getType**(): `MessageType`\<[`Storage`](Storage.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`Storage`](Storage.md)\>

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
| `a` | `undefined` \| [`Storage`](Storage.md) \| `PlainMessage`\<[`Storage`](Storage.md)\> |
| `b` | `undefined` \| [`Storage`](Storage.md) \| `PlainMessage`\<[`Storage`](Storage.md)\> |

#### Returns

`boolean`

#### Defined in

[src/storages.scailo_pb.ts:521](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/storages.scailo_pb.ts#L521)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Storage`](Storage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`Storage`](Storage.md)

#### Defined in

[src/storages.scailo_pb.ts:509](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/storages.scailo_pb.ts#L509)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Storage`](Storage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Storage`](Storage.md)

#### Defined in

[src/storages.scailo_pb.ts:513](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/storages.scailo_pb.ts#L513)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Storage`](Storage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Storage`](Storage.md)

#### Defined in

[src/storages.scailo_pb.ts:517](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/storages.scailo_pb.ts#L517)
