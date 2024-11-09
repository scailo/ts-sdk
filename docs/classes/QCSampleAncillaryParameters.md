[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QCSampleAncillaryParameters

# Class: QCSampleAncillaryParameters

Stores the UUID references of the record

**`Generated`**

from message Scailo.QCSampleAncillaryParameters

## Hierarchy

- `Message`\<[`QCSampleAncillaryParameters`](QCSampleAncillaryParameters.md)\>

  ↳ **`QCSampleAncillaryParameters`**

## Table of contents

### Constructors

- [constructor](QCSampleAncillaryParameters.md#constructor)

### Properties

- [familyUuid](QCSampleAncillaryParameters.md#familyuuid)
- [inventoryItemUuid](QCSampleAncillaryParameters.md#inventoryitemuuid)
- [locationUuid](QCSampleAncillaryParameters.md#locationuuid)
- [qcGroupUuid](QCSampleAncillaryParameters.md#qcgroupuuid)
- [fields](QCSampleAncillaryParameters.md#fields)
- [runtime](QCSampleAncillaryParameters.md#runtime)
- [typeName](QCSampleAncillaryParameters.md#typename)

### Methods

- [clone](QCSampleAncillaryParameters.md#clone)
- [equals](QCSampleAncillaryParameters.md#equals)
- [fromBinary](QCSampleAncillaryParameters.md#frombinary)
- [fromJson](QCSampleAncillaryParameters.md#fromjson)
- [fromJsonString](QCSampleAncillaryParameters.md#fromjsonstring)
- [getType](QCSampleAncillaryParameters.md#gettype)
- [toBinary](QCSampleAncillaryParameters.md#tobinary)
- [toJSON](QCSampleAncillaryParameters.md#tojson)
- [toJson](QCSampleAncillaryParameters.md#tojson-1)
- [toJsonString](QCSampleAncillaryParameters.md#tojsonstring)
- [equals](QCSampleAncillaryParameters.md#equals-1)
- [fromBinary](QCSampleAncillaryParameters.md#frombinary-1)
- [fromJson](QCSampleAncillaryParameters.md#fromjson-1)
- [fromJsonString](QCSampleAncillaryParameters.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCSampleAncillaryParameters**(`data?`): [`QCSampleAncillaryParameters`](QCSampleAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QCSampleAncillaryParameters`](QCSampleAncillaryParameters.md)\> |

#### Returns

[`QCSampleAncillaryParameters`](QCSampleAncillaryParameters.md)

#### Overrides

Message\&lt;QCSampleAncillaryParameters\&gt;.constructor

#### Defined in

src/qc_samples.scailo_pb.ts:583

## Properties

### familyUuid

• **familyUuid**: `string` = `""`

The UUID of the family

**`Generated`**

from field: string family_uuid = 100;

#### Defined in

src/qc_samples.scailo_pb.ts:560

___

### inventoryItemUuid

• **inventoryItemUuid**: `string` = `""`

The UUID of the inventory item

**`Generated`**

from field: string inventory_item_uuid = 111;

#### Defined in

src/qc_samples.scailo_pb.ts:567

___

### locationUuid

• **locationUuid**: `string` = `""`

The UUID of the location

**`Generated`**

from field: string location_uuid = 113;

#### Defined in

src/qc_samples.scailo_pb.ts:581

___

### qcGroupUuid

• **qcGroupUuid**: `string` = `""`

The UUID of the qc group

**`Generated`**

from field: string qc_group_uuid = 112;

#### Defined in

src/qc_samples.scailo_pb.ts:574

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/qc_samples.scailo_pb.ts:590

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/qc_samples.scailo_pb.ts:588

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QCSampleAncillaryParameters"``

#### Defined in

src/qc_samples.scailo_pb.ts:589

## Methods

### clone

▸ **clone**(): [`QCSampleAncillaryParameters`](QCSampleAncillaryParameters.md)

Create a deep copy.

#### Returns

[`QCSampleAncillaryParameters`](QCSampleAncillaryParameters.md)

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
| `other` | `undefined` \| ``null`` \| [`QCSampleAncillaryParameters`](QCSampleAncillaryParameters.md) \| `PlainMessage`\<[`QCSampleAncillaryParameters`](QCSampleAncillaryParameters.md)\> |

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

▸ **getType**(): `MessageType`\<[`QCSampleAncillaryParameters`](QCSampleAncillaryParameters.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QCSampleAncillaryParameters`](QCSampleAncillaryParameters.md)\>

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
| `a` | `undefined` \| [`QCSampleAncillaryParameters`](QCSampleAncillaryParameters.md) \| `PlainMessage`\<[`QCSampleAncillaryParameters`](QCSampleAncillaryParameters.md)\> |
| `b` | `undefined` \| [`QCSampleAncillaryParameters`](QCSampleAncillaryParameters.md) \| `PlainMessage`\<[`QCSampleAncillaryParameters`](QCSampleAncillaryParameters.md)\> |

#### Returns

`boolean`

#### Defined in

src/qc_samples.scailo_pb.ts:609

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCSampleAncillaryParameters`](QCSampleAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QCSampleAncillaryParameters`](QCSampleAncillaryParameters.md)

#### Defined in

src/qc_samples.scailo_pb.ts:597

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCSampleAncillaryParameters`](QCSampleAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCSampleAncillaryParameters`](QCSampleAncillaryParameters.md)

#### Defined in

src/qc_samples.scailo_pb.ts:601

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCSampleAncillaryParameters`](QCSampleAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCSampleAncillaryParameters`](QCSampleAncillaryParameters.md)

#### Defined in

src/qc_samples.scailo_pb.ts:605
