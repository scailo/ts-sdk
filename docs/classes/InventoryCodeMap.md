[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InventoryCodeMap

# Class: InventoryCodeMap

Describes the parameters that are present in an inventory code map

**`Generated`**

from message Scailo.InventoryCodeMap

## Hierarchy

- `Message`\<[`InventoryCodeMap`](InventoryCodeMap.md)\>

  ↳ **`InventoryCodeMap`**

## Table of contents

### Constructors

- [constructor](InventoryCodeMap.md#constructor)

### Properties

- [code](InventoryCodeMap.md#code)
- [entityUuid](InventoryCodeMap.md#entityuuid)
- [familyId](InventoryCodeMap.md#familyid)
- [familyType](InventoryCodeMap.md#familytype)
- [hash](InventoryCodeMap.md#hash)
- [metadata](InventoryCodeMap.md#metadata)
- [purpose](InventoryCodeMap.md#purpose)
- [shortUrl](InventoryCodeMap.md#shorturl)
- [fields](InventoryCodeMap.md#fields)
- [runtime](InventoryCodeMap.md#runtime)
- [typeName](InventoryCodeMap.md#typename)

### Methods

- [clone](InventoryCodeMap.md#clone)
- [equals](InventoryCodeMap.md#equals)
- [fromBinary](InventoryCodeMap.md#frombinary)
- [fromJson](InventoryCodeMap.md#fromjson)
- [fromJsonString](InventoryCodeMap.md#fromjsonstring)
- [getType](InventoryCodeMap.md#gettype)
- [toBinary](InventoryCodeMap.md#tobinary)
- [toJSON](InventoryCodeMap.md#tojson)
- [toJson](InventoryCodeMap.md#tojson-1)
- [toJsonString](InventoryCodeMap.md#tojsonstring)
- [equals](InventoryCodeMap.md#equals-1)
- [fromBinary](InventoryCodeMap.md#frombinary-1)
- [fromJson](InventoryCodeMap.md#fromjson-1)
- [fromJsonString](InventoryCodeMap.md#fromjsonstring-1)

## Constructors

### constructor

• **new InventoryCodeMap**(`data?`): [`InventoryCodeMap`](InventoryCodeMap.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InventoryCodeMap`](InventoryCodeMap.md)\> |

#### Returns

[`InventoryCodeMap`](InventoryCodeMap.md)

#### Overrides

Message\&lt;InventoryCodeMap\&gt;.constructor

#### Defined in

src/inventory.scailo_pb.ts:449

## Properties

### code

• **code**: `string` = `""`

Stores the inventory item's code

**`Generated`**

from field: string code = 20;

#### Defined in

src/inventory.scailo_pb.ts:433

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/inventory.scailo_pb.ts:398

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 12;

#### Defined in

src/inventory.scailo_pb.ts:426

___

### familyType

• **familyType**: [`FAMILY_TYPE`](../enums/FAMILY_TYPE.md) = `FAMILY_TYPE.FAMILY_TYPE_ANY_UNSPECIFIED`

The type of the family

**`Generated`**

from field: Scailo.FAMILY_TYPE family_type = 11;

#### Defined in

src/inventory.scailo_pb.ts:419

___

### hash

• **hash**: `string` = `""`

The hash of the item

**`Generated`**

from field: string hash = 21;

#### Defined in

src/inventory.scailo_pb.ts:440

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this inventory item

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/inventory.scailo_pb.ts:405

___

### purpose

• **purpose**: `string` = `""`

Stores the purpose

**`Generated`**

from field: string purpose = 10;

#### Defined in

src/inventory.scailo_pb.ts:412

___

### shortUrl

• **shortUrl**: `string` = `""`

The short URL of the item

**`Generated`**

from field: string short_url = 30;

#### Defined in

src/inventory.scailo_pb.ts:447

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inventory.scailo_pb.ts:456

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inventory.scailo_pb.ts:454

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InventoryCodeMap"``

#### Defined in

src/inventory.scailo_pb.ts:455

## Methods

### clone

▸ **clone**(): [`InventoryCodeMap`](InventoryCodeMap.md)

Create a deep copy.

#### Returns

[`InventoryCodeMap`](InventoryCodeMap.md)

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
| `other` | `undefined` \| ``null`` \| [`InventoryCodeMap`](InventoryCodeMap.md) \| `PlainMessage`\<[`InventoryCodeMap`](InventoryCodeMap.md)\> |

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

▸ **getType**(): `MessageType`\<[`InventoryCodeMap`](InventoryCodeMap.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InventoryCodeMap`](InventoryCodeMap.md)\>

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
| `a` | `undefined` \| [`InventoryCodeMap`](InventoryCodeMap.md) \| `PlainMessage`\<[`InventoryCodeMap`](InventoryCodeMap.md)\> |
| `b` | `undefined` \| [`InventoryCodeMap`](InventoryCodeMap.md) \| `PlainMessage`\<[`InventoryCodeMap`](InventoryCodeMap.md)\> |

#### Returns

`boolean`

#### Defined in

src/inventory.scailo_pb.ts:479

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InventoryCodeMap`](InventoryCodeMap.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InventoryCodeMap`](InventoryCodeMap.md)

#### Defined in

src/inventory.scailo_pb.ts:467

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InventoryCodeMap`](InventoryCodeMap.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InventoryCodeMap`](InventoryCodeMap.md)

#### Defined in

src/inventory.scailo_pb.ts:471

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InventoryCodeMap`](InventoryCodeMap.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InventoryCodeMap`](InventoryCodeMap.md)

#### Defined in

src/inventory.scailo_pb.ts:475
