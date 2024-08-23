[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / EquationReplaceable

# Class: EquationReplaceable

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.EquationReplaceable

## Hierarchy

- `Message`\<[`EquationReplaceable`](EquationReplaceable.md)\>

  ↳ **`EquationReplaceable`**

## Table of contents

### Constructors

- [constructor](EquationReplaceable.md#constructor)

### Properties

- [approvalMetadata](EquationReplaceable.md#approvalmetadata)
- [completedOn](EquationReplaceable.md#completedon)
- [description](EquationReplaceable.md#description)
- [entityUuid](EquationReplaceable.md#entityuuid)
- [familyId](EquationReplaceable.md#familyid)
- [list](EquationReplaceable.md#list)
- [logs](EquationReplaceable.md#logs)
- [metadata](EquationReplaceable.md#metadata)
- [name](EquationReplaceable.md#name)
- [status](EquationReplaceable.md#status)
- [totalPrice](EquationReplaceable.md#totalprice)
- [vaultFolderId](EquationReplaceable.md#vaultfolderid)
- [fields](EquationReplaceable.md#fields)
- [runtime](EquationReplaceable.md#runtime)
- [typeName](EquationReplaceable.md#typename)

### Methods

- [clone](EquationReplaceable.md#clone)
- [equals](EquationReplaceable.md#equals)
- [fromBinary](EquationReplaceable.md#frombinary)
- [fromJson](EquationReplaceable.md#fromjson)
- [fromJsonString](EquationReplaceable.md#fromjsonstring)
- [getType](EquationReplaceable.md#gettype)
- [toBinary](EquationReplaceable.md#tobinary)
- [toJSON](EquationReplaceable.md#tojson)
- [toJson](EquationReplaceable.md#tojson-1)
- [toJsonString](EquationReplaceable.md#tojsonstring)
- [equals](EquationReplaceable.md#equals-1)
- [fromBinary](EquationReplaceable.md#frombinary-1)
- [fromJson](EquationReplaceable.md#fromjson-1)
- [fromJsonString](EquationReplaceable.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationReplaceable**(`data?`): [`EquationReplaceable`](EquationReplaceable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EquationReplaceable`](EquationReplaceable.md)\> |

#### Returns

[`EquationReplaceable`](EquationReplaceable.md)

#### Overrides

Message\&lt;EquationReplaceable\&gt;.constructor

#### Defined in

src/equations_replaceables.scailo_pb.ts:460

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/equations_replaceables.scailo_pb.ts:395

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this equation replaceable was marked as completed

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

src/equations_replaceables.scailo_pb.ts:416

___

### description

• **description**: `string` = `""`

The description of the equation replaceable

**`Generated`**

from field: string description = 13;

#### Defined in

src/equations_replaceables.scailo_pb.ts:444

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/equations_replaceables.scailo_pb.ts:381

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family that this equation belongs to

**`Generated`**

from field: uint64 family_id = 12;

#### Defined in

src/equations_replaceables.scailo_pb.ts:437

___

### list

• **list**: [`EquationReplaceableItem`](EquationReplaceableItem.md)[] = `[]`

The list of associated equation replaceable items

**`Generated`**

from field: repeated Scailo.EquationReplaceableItem list = 20;

#### Defined in

src/equations_replaceables.scailo_pb.ts:451

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this equation replaceable

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

src/equations_replaceables.scailo_pb.ts:409

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this equation replaceable

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/equations_replaceables.scailo_pb.ts:388

___

### name

• **name**: `string` = `""`

The name of the equation replaceable

**`Generated`**

from field: string name = 10;

#### Defined in

src/equations_replaceables.scailo_pb.ts:430

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this equation replaceable

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

src/equations_replaceables.scailo_pb.ts:402

___

### totalPrice

• **totalPrice**: `number` = `0`

The total price of the equation replaceable

**`Generated`**

from field: double total_price = 40;

#### Defined in

src/equations_replaceables.scailo_pb.ts:458

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/equations_replaceables.scailo_pb.ts:423

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/equations_replaceables.scailo_pb.ts:467

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/equations_replaceables.scailo_pb.ts:465

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EquationReplaceable"``

#### Defined in

src/equations_replaceables.scailo_pb.ts:466

## Methods

### clone

▸ **clone**(): [`EquationReplaceable`](EquationReplaceable.md)

Create a deep copy.

#### Returns

[`EquationReplaceable`](EquationReplaceable.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationReplaceable`](EquationReplaceable.md) \| `PlainMessage`\<[`EquationReplaceable`](EquationReplaceable.md)\> |

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

▸ **getType**(): `MessageType`\<[`EquationReplaceable`](EquationReplaceable.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EquationReplaceable`](EquationReplaceable.md)\>

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
| `a` | `undefined` \| [`EquationReplaceable`](EquationReplaceable.md) \| `PlainMessage`\<[`EquationReplaceable`](EquationReplaceable.md)\> |
| `b` | `undefined` \| [`EquationReplaceable`](EquationReplaceable.md) \| `PlainMessage`\<[`EquationReplaceable`](EquationReplaceable.md)\> |

#### Returns

`boolean`

#### Defined in

src/equations_replaceables.scailo_pb.ts:494

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationReplaceable`](EquationReplaceable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EquationReplaceable`](EquationReplaceable.md)

#### Defined in

src/equations_replaceables.scailo_pb.ts:482

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationReplaceable`](EquationReplaceable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationReplaceable`](EquationReplaceable.md)

#### Defined in

src/equations_replaceables.scailo_pb.ts:486

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationReplaceable`](EquationReplaceable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationReplaceable`](EquationReplaceable.md)

#### Defined in

src/equations_replaceables.scailo_pb.ts:490
