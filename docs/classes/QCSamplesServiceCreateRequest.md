[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QCSamplesServiceCreateRequest

# Class: QCSamplesServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.QCSamplesServiceCreateRequest

## Hierarchy

- `Message`\<[`QCSamplesServiceCreateRequest`](QCSamplesServiceCreateRequest.md)\>

  ↳ **`QCSamplesServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](QCSamplesServiceCreateRequest.md#constructor)

### Properties

- [description](QCSamplesServiceCreateRequest.md#description)
- [entityUuid](QCSamplesServiceCreateRequest.md#entityuuid)
- [familyId](QCSamplesServiceCreateRequest.md#familyid)
- [inventoryItemUuid](QCSamplesServiceCreateRequest.md#inventoryitemuuid)
- [locationId](QCSamplesServiceCreateRequest.md#locationid)
- [namePrefix](QCSamplesServiceCreateRequest.md#nameprefix)
- [qcGroupId](QCSamplesServiceCreateRequest.md#qcgroupid)
- [sampleCount](QCSamplesServiceCreateRequest.md#samplecount)
- [userComment](QCSamplesServiceCreateRequest.md#usercomment)
- [vaultFolderId](QCSamplesServiceCreateRequest.md#vaultfolderid)
- [fields](QCSamplesServiceCreateRequest.md#fields)
- [runtime](QCSamplesServiceCreateRequest.md#runtime)
- [typeName](QCSamplesServiceCreateRequest.md#typename)

### Methods

- [clone](QCSamplesServiceCreateRequest.md#clone)
- [equals](QCSamplesServiceCreateRequest.md#equals)
- [fromBinary](QCSamplesServiceCreateRequest.md#frombinary)
- [fromJson](QCSamplesServiceCreateRequest.md#fromjson)
- [fromJsonString](QCSamplesServiceCreateRequest.md#fromjsonstring)
- [getType](QCSamplesServiceCreateRequest.md#gettype)
- [toBinary](QCSamplesServiceCreateRequest.md#tobinary)
- [toJSON](QCSamplesServiceCreateRequest.md#tojson)
- [toJson](QCSamplesServiceCreateRequest.md#tojson-1)
- [toJsonString](QCSamplesServiceCreateRequest.md#tojsonstring)
- [equals](QCSamplesServiceCreateRequest.md#equals-1)
- [fromBinary](QCSamplesServiceCreateRequest.md#frombinary-1)
- [fromJson](QCSamplesServiceCreateRequest.md#fromjson-1)
- [fromJsonString](QCSamplesServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCSamplesServiceCreateRequest**(`data?`): [`QCSamplesServiceCreateRequest`](QCSamplesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QCSamplesServiceCreateRequest`](QCSamplesServiceCreateRequest.md)\> |

#### Returns

[`QCSamplesServiceCreateRequest`](QCSamplesServiceCreateRequest.md)

#### Overrides

Message\&lt;QCSamplesServiceCreateRequest\&gt;.constructor

#### Defined in

[src/qc_samples.scailo_pb.ts:429](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L429)

## Properties

### description

• **description**: `string` = `""`

The description of the qc sample

**`Generated`**

from field: string description = 21;

#### Defined in

[src/qc_samples.scailo_pb.ts:420](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L420)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/qc_samples.scailo_pb.ts:364](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L364)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The associated family ID

**`Generated`**

from field: uint64 family_id = 10;

#### Defined in

[src/qc_samples.scailo_pb.ts:385](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L385)

___

### inventoryItemUuid

• **inventoryItemUuid**: `string` = `""`

The UUID of the inventory item

**`Generated`**

from field: string inventory_item_uuid = 11;

#### Defined in

[src/qc_samples.scailo_pb.ts:392](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L392)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the record is created

**`Generated`**

from field: uint64 location_id = 13;

#### Defined in

[src/qc_samples.scailo_pb.ts:406](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L406)

___

### namePrefix

• **namePrefix**: `string` = `""`

The name that will be used as a prefix

**`Generated`**

from field: string name_prefix = 20;

#### Defined in

[src/qc_samples.scailo_pb.ts:413](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L413)

___

### qcGroupId

• **qcGroupId**: `bigint` = `protoInt64.zero`

The ID of the qc group

**`Generated`**

from field: uint64 qc_group_id = 12;

#### Defined in

[src/qc_samples.scailo_pb.ts:399](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L399)

___

### sampleCount

• **sampleCount**: `bigint` = `protoInt64.zero`

The number of samples that need to be created

**`Generated`**

from field: uint64 sample_count = 30;

#### Defined in

[src/qc_samples.scailo_pb.ts:427](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L427)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/qc_samples.scailo_pb.ts:371](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L371)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 8;

#### Defined in

[src/qc_samples.scailo_pb.ts:378](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L378)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/qc_samples.scailo_pb.ts:436](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L436)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/qc_samples.scailo_pb.ts:434](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L434)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QCSamplesServiceCreateRequest"``

#### Defined in

[src/qc_samples.scailo_pb.ts:435](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L435)

## Methods

### clone

▸ **clone**(): [`QCSamplesServiceCreateRequest`](QCSamplesServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`QCSamplesServiceCreateRequest`](QCSamplesServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QCSamplesServiceCreateRequest`](QCSamplesServiceCreateRequest.md) \| `PlainMessage`\<[`QCSamplesServiceCreateRequest`](QCSamplesServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`QCSamplesServiceCreateRequest`](QCSamplesServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QCSamplesServiceCreateRequest`](QCSamplesServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`QCSamplesServiceCreateRequest`](QCSamplesServiceCreateRequest.md) \| `PlainMessage`\<[`QCSamplesServiceCreateRequest`](QCSamplesServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`QCSamplesServiceCreateRequest`](QCSamplesServiceCreateRequest.md) \| `PlainMessage`\<[`QCSamplesServiceCreateRequest`](QCSamplesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/qc_samples.scailo_pb.ts:461](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L461)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCSamplesServiceCreateRequest`](QCSamplesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QCSamplesServiceCreateRequest`](QCSamplesServiceCreateRequest.md)

#### Defined in

[src/qc_samples.scailo_pb.ts:449](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L449)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCSamplesServiceCreateRequest`](QCSamplesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCSamplesServiceCreateRequest`](QCSamplesServiceCreateRequest.md)

#### Defined in

[src/qc_samples.scailo_pb.ts:453](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L453)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCSamplesServiceCreateRequest`](QCSamplesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCSamplesServiceCreateRequest`](QCSamplesServiceCreateRequest.md)

#### Defined in

[src/qc_samples.scailo_pb.ts:457](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L457)
