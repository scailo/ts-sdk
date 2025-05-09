[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProductionIndentItem

# Class: ProductionIndentItem

Describes the parameters that constitute an item associated to a production indent

**`Generated`**

from message Scailo.ProductionIndentItem

## Hierarchy

- `Message`\<[`ProductionIndentItem`](ProductionIndentItem.md)\>

  ↳ **`ProductionIndentItem`**

## Table of contents

### Constructors

- [constructor](ProductionIndentItem.md#constructor)

### Properties

- [approvalMetadata](ProductionIndentItem.md#approvalmetadata)
- [entityUuid](ProductionIndentItem.md#entityuuid)
- [familyId](ProductionIndentItem.md#familyid)
- [internalQuantity](ProductionIndentItem.md#internalquantity)
- [metadata](ProductionIndentItem.md#metadata)
- [needApproval](ProductionIndentItem.md#needapproval)
- [productionIndentId](ProductionIndentItem.md#productionindentid)
- [userComment](ProductionIndentItem.md#usercomment)
- [fields](ProductionIndentItem.md#fields)
- [runtime](ProductionIndentItem.md#runtime)
- [typeName](ProductionIndentItem.md#typename)

### Methods

- [clone](ProductionIndentItem.md#clone)
- [equals](ProductionIndentItem.md#equals)
- [fromBinary](ProductionIndentItem.md#frombinary)
- [fromJson](ProductionIndentItem.md#fromjson)
- [fromJsonString](ProductionIndentItem.md#fromjsonstring)
- [getType](ProductionIndentItem.md#gettype)
- [toBinary](ProductionIndentItem.md#tobinary)
- [toJSON](ProductionIndentItem.md#tojson)
- [toJson](ProductionIndentItem.md#tojson-1)
- [toJsonString](ProductionIndentItem.md#tojsonstring)
- [equals](ProductionIndentItem.md#equals-1)
- [fromBinary](ProductionIndentItem.md#frombinary-1)
- [fromJson](ProductionIndentItem.md#fromjson-1)
- [fromJsonString](ProductionIndentItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionIndentItem**(`data?`): [`ProductionIndentItem`](ProductionIndentItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProductionIndentItem`](ProductionIndentItem.md)\> |

#### Returns

[`ProductionIndentItem`](ProductionIndentItem.md)

#### Overrides

Message\&lt;ProductionIndentItem\&gt;.constructor

#### Defined in

src/production_indents.scailo_pb.ts:917

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/production_indents.scailo_pb.ts:880

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/production_indents.scailo_pb.ts:866

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/production_indents.scailo_pb.ts:908

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity required

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

src/production_indents.scailo_pb.ts:915

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this production indent

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/production_indents.scailo_pb.ts:873

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

src/production_indents.scailo_pb.ts:887

___

### productionIndentId

• **productionIndentId**: `bigint` = `protoInt64.zero`

Stores the production indent ID

**`Generated`**

from field: uint64 production_indent_id = 10;

#### Defined in

src/production_indents.scailo_pb.ts:901

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

src/production_indents.scailo_pb.ts:894

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/production_indents.scailo_pb.ts:924

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/production_indents.scailo_pb.ts:922

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProductionIndentItem"``

#### Defined in

src/production_indents.scailo_pb.ts:923

## Methods

### clone

▸ **clone**(): [`ProductionIndentItem`](ProductionIndentItem.md)

Create a deep copy.

#### Returns

[`ProductionIndentItem`](ProductionIndentItem.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionIndentItem`](ProductionIndentItem.md) \| `PlainMessage`\<[`ProductionIndentItem`](ProductionIndentItem.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProductionIndentItem`](ProductionIndentItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProductionIndentItem`](ProductionIndentItem.md)\>

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
| `a` | `undefined` \| [`ProductionIndentItem`](ProductionIndentItem.md) \| `PlainMessage`\<[`ProductionIndentItem`](ProductionIndentItem.md)\> |
| `b` | `undefined` \| [`ProductionIndentItem`](ProductionIndentItem.md) \| `PlainMessage`\<[`ProductionIndentItem`](ProductionIndentItem.md)\> |

#### Returns

`boolean`

#### Defined in

src/production_indents.scailo_pb.ts:947

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionIndentItem`](ProductionIndentItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProductionIndentItem`](ProductionIndentItem.md)

#### Defined in

src/production_indents.scailo_pb.ts:935

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionIndentItem`](ProductionIndentItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentItem`](ProductionIndentItem.md)

#### Defined in

src/production_indents.scailo_pb.ts:939

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionIndentItem`](ProductionIndentItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentItem`](ProductionIndentItem.md)

#### Defined in

src/production_indents.scailo_pb.ts:943
