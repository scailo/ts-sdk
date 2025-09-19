[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QCSample

# Class: QCSample

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.QCSample

## Hierarchy

- `Message`\<[`QCSample`](QCSample.md)\>

  ↳ **`QCSample`**

## Table of contents

### Constructors

- [constructor](QCSample.md#constructor)

### Properties

- [approvalMetadata](QCSample.md#approvalmetadata)
- [description](QCSample.md#description)
- [entityUuid](QCSample.md#entityuuid)
- [familyId](QCSample.md#familyid)
- [familyType](QCSample.md#familytype)
- [finishedOn](QCSample.md#finishedon)
- [inventoryItemUuid](QCSample.md#inventoryitemuuid)
- [locationId](QCSample.md#locationid)
- [logs](QCSample.md#logs)
- [metadata](QCSample.md#metadata)
- [name](QCSample.md#name)
- [qcGroupId](QCSample.md#qcgroupid)
- [status](QCSample.md#status)
- [vaultFolderId](QCSample.md#vaultfolderid)
- [fields](QCSample.md#fields)
- [runtime](QCSample.md#runtime)
- [typeName](QCSample.md#typename)

### Methods

- [clone](QCSample.md#clone)
- [equals](QCSample.md#equals)
- [fromBinary](QCSample.md#frombinary)
- [fromJson](QCSample.md#fromjson)
- [fromJsonString](QCSample.md#fromjsonstring)
- [getType](QCSample.md#gettype)
- [toBinary](QCSample.md#tobinary)
- [toJSON](QCSample.md#tojson)
- [toJson](QCSample.md#tojson-1)
- [toJsonString](QCSample.md#tojsonstring)
- [equals](QCSample.md#equals-1)
- [fromBinary](QCSample.md#frombinary-1)
- [fromJson](QCSample.md#fromjson-1)
- [fromJsonString](QCSample.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCSample**(`data?`): [`QCSample`](QCSample.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QCSample`](QCSample.md)\> |

#### Returns

[`QCSample`](QCSample.md)

#### Overrides

Message\&lt;QCSample\&gt;.constructor

#### Defined in

[src/qc_samples.scailo_pb.ts:719](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L719)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/qc_samples.scailo_pb.ts:640](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L640)

___

### description

• **description**: `string` = `""`

The description of the qc sample

**`Generated`**

from field: string description = 21;

#### Defined in

[src/qc_samples.scailo_pb.ts:717](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L717)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/qc_samples.scailo_pb.ts:626](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L626)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The associated family ID

**`Generated`**

from field: uint64 family_id = 10;

#### Defined in

[src/qc_samples.scailo_pb.ts:682](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L682)

___

### familyType

• **familyType**: [`FAMILY_TYPE`](../enums/FAMILY_TYPE.md) = `FAMILY_TYPE.FAMILY_TYPE_ANY_UNSPECIFIED`

The associated family type

**`Generated`**

from field: Scailo.FAMILY_TYPE family_type = 9;

#### Defined in

[src/qc_samples.scailo_pb.ts:675](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L675)

___

### finishedOn

• **finishedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this qc sample was marked as finished

**`Generated`**

from field: uint64 finished_on = 6;

#### Defined in

[src/qc_samples.scailo_pb.ts:661](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L661)

___

### inventoryItemUuid

• **inventoryItemUuid**: `string` = `""`

The UUID of the inventory item

**`Generated`**

from field: string inventory_item_uuid = 11;

#### Defined in

[src/qc_samples.scailo_pb.ts:689](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L689)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the record is created

**`Generated`**

from field: uint64 location_id = 13;

#### Defined in

[src/qc_samples.scailo_pb.ts:703](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L703)

___

### logs

• **logs**: [`LogbookLogQCSampleLC`](LogbookLogQCSampleLC.md)[] = `[]`

Stores the logs of every operation performed on this qc sample

**`Generated`**

from field: repeated Scailo.LogbookLogQCSampleLC logs = 5;

#### Defined in

[src/qc_samples.scailo_pb.ts:654](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L654)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this qc sample

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/qc_samples.scailo_pb.ts:633](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L633)

___

### name

• **name**: `string` = `""`

The name of the qc sample (will be autogenerated if not provided)

**`Generated`**

from field: string name = 20;

#### Defined in

[src/qc_samples.scailo_pb.ts:710](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L710)

___

### qcGroupId

• **qcGroupId**: `bigint` = `protoInt64.zero`

The ID of the qc group

**`Generated`**

from field: uint64 qc_group_id = 12;

#### Defined in

[src/qc_samples.scailo_pb.ts:696](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L696)

___

### status

• **status**: [`QC_SAMPLE_LIFECYCLE`](../enums/QC_SAMPLE_LIFECYCLE.md) = `QC_SAMPLE_LIFECYCLE.QC_SAMPLE_LIFECYCLE_ANY_UNSPECIFIED`

The status of this qc sample

**`Generated`**

from field: Scailo.QC_SAMPLE_LIFECYCLE status = 4;

#### Defined in

[src/qc_samples.scailo_pb.ts:647](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L647)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 8;

#### Defined in

[src/qc_samples.scailo_pb.ts:668](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L668)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/qc_samples.scailo_pb.ts:726](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L726)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/qc_samples.scailo_pb.ts:724](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L724)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QCSample"``

#### Defined in

[src/qc_samples.scailo_pb.ts:725](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L725)

## Methods

### clone

▸ **clone**(): [`QCSample`](QCSample.md)

Create a deep copy.

#### Returns

[`QCSample`](QCSample.md)

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
| `other` | `undefined` \| ``null`` \| [`QCSample`](QCSample.md) \| `PlainMessage`\<[`QCSample`](QCSample.md)\> |

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

▸ **getType**(): `MessageType`\<[`QCSample`](QCSample.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QCSample`](QCSample.md)\>

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
| `a` | `undefined` \| [`QCSample`](QCSample.md) \| `PlainMessage`\<[`QCSample`](QCSample.md)\> |
| `b` | `undefined` \| [`QCSample`](QCSample.md) \| `PlainMessage`\<[`QCSample`](QCSample.md)\> |

#### Returns

`boolean`

#### Defined in

[src/qc_samples.scailo_pb.ts:755](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L755)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCSample`](QCSample.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QCSample`](QCSample.md)

#### Defined in

[src/qc_samples.scailo_pb.ts:743](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L743)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCSample`](QCSample.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCSample`](QCSample.md)

#### Defined in

[src/qc_samples.scailo_pb.ts:747](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L747)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCSample`](QCSample.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCSample`](QCSample.md)

#### Defined in

[src/qc_samples.scailo_pb.ts:751](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L751)
