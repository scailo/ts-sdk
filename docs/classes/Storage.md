[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / Storage

# Class: Storage

Describes the parameters that are part of a standard response

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

src/storages.scailo_pb.ts:341

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Storages the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/storages.scailo_pb.ts:283

___

### code

• **code**: `string` = `""`

The unique code by which the storage is classified

**`Generated`**

from field: string code = 11;

#### Defined in

src/storages.scailo_pb.ts:311

___

### description

• **description**: `string` = `""`

The description of the storage

**`Generated`**

from field: string description = 15;

#### Defined in

src/storages.scailo_pb.ts:339

___

### entityUuid

• **entityUuid**: `string` = `""`

Storages a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/storages.scailo_pb.ts:269

___

### isLeaf

• **isLeaf**: `boolean` = `false`

Stores if this is a leaf storage or a non-leaf storage

**`Generated`**

from field: bool is_leaf = 14;

#### Defined in

src/storages.scailo_pb.ts:332

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Storages the logs of every operation performed on this storage

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

src/storages.scailo_pb.ts:297

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Storages the metadata of this storage

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/storages.scailo_pb.ts:276

___

### name

• **name**: `string` = `""`

The name of the storage

**`Generated`**

from field: string name = 10;

#### Defined in

src/storages.scailo_pb.ts:304

___

### parentStorageId

• **parentStorageId**: `bigint` = `protoInt64.zero`

The ID of the associated non-leaf parent storage (0, if the first storage that is being created is a leaf storage)

**`Generated`**

from field: uint64 parent_storage_id = 13;

#### Defined in

src/storages.scailo_pb.ts:325

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this storage

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

src/storages.scailo_pb.ts:290

___

### storeId

• **storeId**: `bigint` = `protoInt64.zero`

The ID of the associated store

**`Generated`**

from field: uint64 store_id = 12;

#### Defined in

src/storages.scailo_pb.ts:318

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/storages.scailo_pb.ts:348

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/storages.scailo_pb.ts:346

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.Storage"``

#### Defined in

src/storages.scailo_pb.ts:347

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

src/storages.scailo_pb.ts:374

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

src/storages.scailo_pb.ts:362

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

src/storages.scailo_pb.ts:366

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

src/storages.scailo_pb.ts:370
