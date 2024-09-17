[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EquationFamily

# Class: EquationFamily

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.EquationFamily

## Hierarchy

- `Message`\<[`EquationFamily`](EquationFamily.md)\>

  ↳ **`EquationFamily`**

## Table of contents

### Constructors

- [constructor](EquationFamily.md#constructor)

### Properties

- [approvalMetadata](EquationFamily.md#approvalmetadata)
- [completedOn](EquationFamily.md#completedon)
- [description](EquationFamily.md#description)
- [entityUuid](EquationFamily.md#entityuuid)
- [familyId](EquationFamily.md#familyid)
- [list](EquationFamily.md#list)
- [logs](EquationFamily.md#logs)
- [metadata](EquationFamily.md#metadata)
- [name](EquationFamily.md#name)
- [status](EquationFamily.md#status)
- [totalPrice](EquationFamily.md#totalprice)
- [vaultFolderId](EquationFamily.md#vaultfolderid)
- [fields](EquationFamily.md#fields)
- [runtime](EquationFamily.md#runtime)
- [typeName](EquationFamily.md#typename)

### Methods

- [clone](EquationFamily.md#clone)
- [equals](EquationFamily.md#equals)
- [fromBinary](EquationFamily.md#frombinary)
- [fromJson](EquationFamily.md#fromjson)
- [fromJsonString](EquationFamily.md#fromjsonstring)
- [getType](EquationFamily.md#gettype)
- [toBinary](EquationFamily.md#tobinary)
- [toJSON](EquationFamily.md#tojson)
- [toJson](EquationFamily.md#tojson-1)
- [toJsonString](EquationFamily.md#tojsonstring)
- [equals](EquationFamily.md#equals-1)
- [fromBinary](EquationFamily.md#frombinary-1)
- [fromJson](EquationFamily.md#fromjson-1)
- [fromJsonString](EquationFamily.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationFamily**(`data?`): [`EquationFamily`](EquationFamily.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EquationFamily`](EquationFamily.md)\> |

#### Returns

[`EquationFamily`](EquationFamily.md)

#### Overrides

Message\&lt;EquationFamily\&gt;.constructor

#### Defined in

src/equations_families.scailo_pb.ts:466

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/equations_families.scailo_pb.ts:401

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this equation family was marked as completed

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

src/equations_families.scailo_pb.ts:422

___

### description

• **description**: `string` = `""`

The description of the equation family

**`Generated`**

from field: string description = 13;

#### Defined in

src/equations_families.scailo_pb.ts:450

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/equations_families.scailo_pb.ts:387

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family that this equation belongs to

**`Generated`**

from field: uint64 family_id = 12;

#### Defined in

src/equations_families.scailo_pb.ts:443

___

### list

• **list**: [`EquationFamilyItem`](EquationFamilyItem.md)[] = `[]`

The list of associated equation family items

**`Generated`**

from field: repeated Scailo.EquationFamilyItem list = 20;

#### Defined in

src/equations_families.scailo_pb.ts:457

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this equation family

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

src/equations_families.scailo_pb.ts:415

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this equation family

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/equations_families.scailo_pb.ts:394

___

### name

• **name**: `string` = `""`

The name of the equation family

**`Generated`**

from field: string name = 10;

#### Defined in

src/equations_families.scailo_pb.ts:436

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this equation family

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

src/equations_families.scailo_pb.ts:408

___

### totalPrice

• **totalPrice**: `number` = `0`

The total price of the equation family

**`Generated`**

from field: double total_price = 40;

#### Defined in

src/equations_families.scailo_pb.ts:464

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/equations_families.scailo_pb.ts:429

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/equations_families.scailo_pb.ts:473

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/equations_families.scailo_pb.ts:471

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EquationFamily"``

#### Defined in

src/equations_families.scailo_pb.ts:472

## Methods

### clone

▸ **clone**(): [`EquationFamily`](EquationFamily.md)

Create a deep copy.

#### Returns

[`EquationFamily`](EquationFamily.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationFamily`](EquationFamily.md) \| `PlainMessage`\<[`EquationFamily`](EquationFamily.md)\> |

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

▸ **getType**(): `MessageType`\<[`EquationFamily`](EquationFamily.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EquationFamily`](EquationFamily.md)\>

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
| `a` | `undefined` \| [`EquationFamily`](EquationFamily.md) \| `PlainMessage`\<[`EquationFamily`](EquationFamily.md)\> |
| `b` | `undefined` \| [`EquationFamily`](EquationFamily.md) \| `PlainMessage`\<[`EquationFamily`](EquationFamily.md)\> |

#### Returns

`boolean`

#### Defined in

src/equations_families.scailo_pb.ts:500

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationFamily`](EquationFamily.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EquationFamily`](EquationFamily.md)

#### Defined in

src/equations_families.scailo_pb.ts:488

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationFamily`](EquationFamily.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationFamily`](EquationFamily.md)

#### Defined in

src/equations_families.scailo_pb.ts:492

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationFamily`](EquationFamily.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationFamily`](EquationFamily.md)

#### Defined in

src/equations_families.scailo_pb.ts:496
