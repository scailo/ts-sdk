[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InventoryInteraction

# Class: InventoryInteraction

Stores the parameters present within an inventory interaction

**`Generated`**

from message Scailo.InventoryInteraction

## Hierarchy

- `Message`\<[`InventoryInteraction`](InventoryInteraction.md)\>

  ↳ **`InventoryInteraction`**

## Table of contents

### Constructors

- [constructor](InventoryInteraction.md#constructor)

### Properties

- [category](InventoryInteraction.md#category)
- [entityUuid](InventoryInteraction.md#entityuuid)
- [internalQuantity](InventoryInteraction.md#internalquantity)
- [inventoryRefUuid](InventoryInteraction.md#inventoryrefuuid)
- [issuedInventoryHash](InventoryInteraction.md#issuedinventoryhash)
- [issuedRefId](InventoryInteraction.md#issuedrefid)
- [issuedRefPurpose](InventoryInteraction.md#issuedrefpurpose)
- [metadata](InventoryInteraction.md#metadata)
- [fields](InventoryInteraction.md#fields)
- [runtime](InventoryInteraction.md#runtime)
- [typeName](InventoryInteraction.md#typename)

### Methods

- [clone](InventoryInteraction.md#clone)
- [equals](InventoryInteraction.md#equals)
- [fromBinary](InventoryInteraction.md#frombinary)
- [fromJson](InventoryInteraction.md#fromjson)
- [fromJsonString](InventoryInteraction.md#fromjsonstring)
- [getType](InventoryInteraction.md#gettype)
- [toBinary](InventoryInteraction.md#tobinary)
- [toJSON](InventoryInteraction.md#tojson)
- [toJson](InventoryInteraction.md#tojson-1)
- [toJsonString](InventoryInteraction.md#tojsonstring)
- [equals](InventoryInteraction.md#equals-1)
- [fromBinary](InventoryInteraction.md#frombinary-1)
- [fromJson](InventoryInteraction.md#fromjson-1)
- [fromJsonString](InventoryInteraction.md#fromjsonstring-1)

## Constructors

### constructor

• **new InventoryInteraction**(`data?`): [`InventoryInteraction`](InventoryInteraction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InventoryInteraction`](InventoryInteraction.md)\> |

#### Returns

[`InventoryInteraction`](InventoryInteraction.md)

#### Overrides

Message\&lt;InventoryInteraction\&gt;.constructor

#### Defined in

src/base.scailo_pb.ts:3721

## Properties

### category

• **category**: [`INVENTORY_INTERACTION_CATEGORY`](../enums/INVENTORY_INTERACTION_CATEGORY.md) = `INVENTORY_INTERACTION_CATEGORY.INVENTORY_INTERACTION_CATEGORY_ANY_UNSPECIFIED`

Stores the category

**`Generated`**

from field: Scailo.INVENTORY_INTERACTION_CATEGORY category = 10;

#### Defined in

src/base.scailo_pb.ts:3684

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/base.scailo_pb.ts:3670

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity of this item (in cents). Can be negative since this could also be an adjustment

**`Generated`**

from field: int64 internal_quantity = 15;

#### Defined in

src/base.scailo_pb.ts:3719

___

### inventoryRefUuid

• **inventoryRefUuid**: `string` = `""`

Stores the UUID of the inventory item

**`Generated`**

from field: string inventory_ref_uuid = 11;

#### Defined in

src/base.scailo_pb.ts:3691

___

### issuedInventoryHash

• **issuedInventoryHash**: `string` = `""`

Stores the hash of the inventory item that has been issued from this parent item

**`Generated`**

from field: string issued_inventory_hash = 12;

#### Defined in

src/base.scailo_pb.ts:3698

___

### issuedRefId

• **issuedRefId**: `bigint` = `protoInt64.zero`

Stores the ID of the corresponding issued_ref_purpose item, for e.g., the stock-issuance ID

**`Generated`**

from field: uint64 issued_ref_id = 14;

#### Defined in

src/base.scailo_pb.ts:3712

___

### issuedRefPurpose

• **issuedRefPurpose**: [`INVENTORY_ISSUED_PURPOSE`](../enums/INVENTORY_ISSUED_PURPOSE.md) = `INVENTORY_ISSUED_PURPOSE.INVENTORY_ISSUED_PURPOSE_ANY_UNSPECIFIED`

Stores the purpose for which this new item has been issued, for e.g. 'stock-issuance'

**`Generated`**

from field: Scailo.INVENTORY_ISSUED_PURPOSE issued_ref_purpose = 13;

#### Defined in

src/base.scailo_pb.ts:3705

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this interaction

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/base.scailo_pb.ts:3677

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/base.scailo_pb.ts:3728

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/base.scailo_pb.ts:3726

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InventoryInteraction"``

#### Defined in

src/base.scailo_pb.ts:3727

## Methods

### clone

▸ **clone**(): [`InventoryInteraction`](InventoryInteraction.md)

Create a deep copy.

#### Returns

[`InventoryInteraction`](InventoryInteraction.md)

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
| `other` | `undefined` \| ``null`` \| [`InventoryInteraction`](InventoryInteraction.md) \| `PlainMessage`\<[`InventoryInteraction`](InventoryInteraction.md)\> |

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

▸ **getType**(): `MessageType`\<[`InventoryInteraction`](InventoryInteraction.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InventoryInteraction`](InventoryInteraction.md)\>

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
| `a` | `undefined` \| [`InventoryInteraction`](InventoryInteraction.md) \| `PlainMessage`\<[`InventoryInteraction`](InventoryInteraction.md)\> |
| `b` | `undefined` \| [`InventoryInteraction`](InventoryInteraction.md) \| `PlainMessage`\<[`InventoryInteraction`](InventoryInteraction.md)\> |

#### Returns

`boolean`

#### Defined in

src/base.scailo_pb.ts:3751

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InventoryInteraction`](InventoryInteraction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InventoryInteraction`](InventoryInteraction.md)

#### Defined in

src/base.scailo_pb.ts:3739

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InventoryInteraction`](InventoryInteraction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InventoryInteraction`](InventoryInteraction.md)

#### Defined in

src/base.scailo_pb.ts:3743

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InventoryInteraction`](InventoryInteraction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InventoryInteraction`](InventoryInteraction.md)

#### Defined in

src/base.scailo_pb.ts:3747
