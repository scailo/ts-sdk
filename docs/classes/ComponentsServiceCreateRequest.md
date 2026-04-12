[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ComponentsServiceCreateRequest

# Class: ComponentsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.ComponentsServiceCreateRequest

## Hierarchy

- `Message`\<[`ComponentsServiceCreateRequest`](ComponentsServiceCreateRequest.md)\>

  ↳ **`ComponentsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](ComponentsServiceCreateRequest.md#constructor)

### Properties

- [description](ComponentsServiceCreateRequest.md#description)
- [entityUuid](ComponentsServiceCreateRequest.md#entityuuid)
- [familyId](ComponentsServiceCreateRequest.md#familyid)
- [formData](ComponentsServiceCreateRequest.md#formdata)
- [internalItemCode](ComponentsServiceCreateRequest.md#internalitemcode)
- [locationId](ComponentsServiceCreateRequest.md#locationid)
- [quantity](ComponentsServiceCreateRequest.md#quantity)
- [refFrom](ComponentsServiceCreateRequest.md#reffrom)
- [refId](ComponentsServiceCreateRequest.md#refid)
- [secondaryQuantity](ComponentsServiceCreateRequest.md#secondaryquantity)
- [secondaryUomId](ComponentsServiceCreateRequest.md#secondaryuomid)
- [shelfLifeTimestamp](ComponentsServiceCreateRequest.md#shelflifetimestamp)
- [userComment](ComponentsServiceCreateRequest.md#usercomment)
- [vaultFolderId](ComponentsServiceCreateRequest.md#vaultfolderid)
- [warrantyTimestamp](ComponentsServiceCreateRequest.md#warrantytimestamp)
- [fields](ComponentsServiceCreateRequest.md#fields)
- [runtime](ComponentsServiceCreateRequest.md#runtime)
- [typeName](ComponentsServiceCreateRequest.md#typename)

### Methods

- [clone](ComponentsServiceCreateRequest.md#clone)
- [equals](ComponentsServiceCreateRequest.md#equals)
- [fromBinary](ComponentsServiceCreateRequest.md#frombinary)
- [fromJson](ComponentsServiceCreateRequest.md#fromjson)
- [fromJsonString](ComponentsServiceCreateRequest.md#fromjsonstring)
- [getType](ComponentsServiceCreateRequest.md#gettype)
- [toBinary](ComponentsServiceCreateRequest.md#tobinary)
- [toJSON](ComponentsServiceCreateRequest.md#tojson)
- [toJson](ComponentsServiceCreateRequest.md#tojson-1)
- [toJsonString](ComponentsServiceCreateRequest.md#tojsonstring)
- [equals](ComponentsServiceCreateRequest.md#equals-1)
- [fromBinary](ComponentsServiceCreateRequest.md#frombinary-1)
- [fromJson](ComponentsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](ComponentsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ComponentsServiceCreateRequest**(`data?`): [`ComponentsServiceCreateRequest`](ComponentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ComponentsServiceCreateRequest`](ComponentsServiceCreateRequest.md)\> |

#### Returns

[`ComponentsServiceCreateRequest`](ComponentsServiceCreateRequest.md)

#### Overrides

Message\&lt;ComponentsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/components.scailo_pb.ts:191](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/components.scailo_pb.ts#L191)

## Properties

### description

• **description**: `string` = `""`

The description of the component

**`Generated`**

from field: string description = 60;

#### Defined in

[src/components.scailo_pb.ts:182](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/components.scailo_pb.ts#L182)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Optional`**

**`Description`**

The globally unique identifier for the Organization or Business Entity.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/components.scailo_pb.ts:91](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/components.scailo_pb.ts#L91)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the ID of the associated family

**`Generated`**

from field: uint64 family_id = 33;

#### Defined in

[src/components.scailo_pb.ts:126](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/components.scailo_pb.ts#L126)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 80;

#### Defined in

[src/components.scailo_pb.ts:189](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/components.scailo_pb.ts#L189)

___

### internalItemCode

• **internalItemCode**: `string` = `""`

Stores the internal code (as given by user)

**`Generated`**

from field: string internal_item_code = 35;

#### Defined in

[src/components.scailo_pb.ts:133](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/components.scailo_pb.ts#L133)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the item needs to be stored

**`Generated`**

from field: uint64 location_id = 54;

#### Defined in

[src/components.scailo_pb.ts:175](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/components.scailo_pb.ts#L175)

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents)

**`Generated`**

from field: uint64 quantity = 37;

#### Defined in

[src/components.scailo_pb.ts:140](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/components.scailo_pb.ts#L140)

___

### refFrom

• **refFrom**: [`COMPONENT_REF_FROM`](../enums/COMPONENT_REF_FROM.md) = `COMPONENT_REF_FROM.COMPONENT_REF_FROM_ANY_UNSPECIFIED`

Stores the reference from

**`Generated`**

from field: Scailo.COMPONENT_REF_FROM ref_from = 31;

#### Defined in

[src/components.scailo_pb.ts:112](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/components.scailo_pb.ts#L112)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

Stores the ID of the reference

**`Generated`**

from field: uint64 ref_id = 32;

#### Defined in

[src/components.scailo_pb.ts:119](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/components.scailo_pb.ts#L119)

___

### secondaryQuantity

• **secondaryQuantity**: `bigint` = `protoInt64.zero`

Stores an optional quantity in the secondary unit of component

**`Generated`**

from field: uint64 secondary_quantity = 40;

#### Defined in

[src/components.scailo_pb.ts:154](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/components.scailo_pb.ts#L154)

___

### secondaryUomId

• **secondaryUomId**: `bigint` = `protoInt64.zero`

Stores an optional secondary unit of component

**`Generated`**

from field: uint64 secondary_uom_id = 39;

#### Defined in

[src/components.scailo_pb.ts:147](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/components.scailo_pb.ts#L147)

___

### shelfLifeTimestamp

• **shelfLifeTimestamp**: `bigint` = `protoInt64.zero`

Stores an optional shelf life as a timestamp

**`Generated`**

from field: uint64 shelf_life_timestamp = 41;

#### Defined in

[src/components.scailo_pb.ts:161](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/components.scailo_pb.ts#L161)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/components.scailo_pb.ts:98](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/components.scailo_pb.ts#L98)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 18;

#### Defined in

[src/components.scailo_pb.ts:105](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/components.scailo_pb.ts#L105)

___

### warrantyTimestamp

• **warrantyTimestamp**: `bigint` = `protoInt64.zero`

Stores an optional warranty as a timestamp

**`Generated`**

from field: uint64 warranty_timestamp = 42;

#### Defined in

[src/components.scailo_pb.ts:168](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/components.scailo_pb.ts#L168)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/components.scailo_pb.ts:198](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/components.scailo_pb.ts#L198)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/components.scailo_pb.ts:196](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/components.scailo_pb.ts#L196)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ComponentsServiceCreateRequest"``

#### Defined in

[src/components.scailo_pb.ts:197](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/components.scailo_pb.ts#L197)

## Methods

### clone

▸ **clone**(): [`ComponentsServiceCreateRequest`](ComponentsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`ComponentsServiceCreateRequest`](ComponentsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ComponentsServiceCreateRequest`](ComponentsServiceCreateRequest.md) \| `PlainMessage`\<[`ComponentsServiceCreateRequest`](ComponentsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ComponentsServiceCreateRequest`](ComponentsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ComponentsServiceCreateRequest`](ComponentsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`ComponentsServiceCreateRequest`](ComponentsServiceCreateRequest.md) \| `PlainMessage`\<[`ComponentsServiceCreateRequest`](ComponentsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`ComponentsServiceCreateRequest`](ComponentsServiceCreateRequest.md) \| `PlainMessage`\<[`ComponentsServiceCreateRequest`](ComponentsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/components.scailo_pb.ts:228](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/components.scailo_pb.ts#L228)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ComponentsServiceCreateRequest`](ComponentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ComponentsServiceCreateRequest`](ComponentsServiceCreateRequest.md)

#### Defined in

[src/components.scailo_pb.ts:216](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/components.scailo_pb.ts#L216)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ComponentsServiceCreateRequest`](ComponentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ComponentsServiceCreateRequest`](ComponentsServiceCreateRequest.md)

#### Defined in

[src/components.scailo_pb.ts:220](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/components.scailo_pb.ts#L220)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ComponentsServiceCreateRequest`](ComponentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ComponentsServiceCreateRequest`](ComponentsServiceCreateRequest.md)

#### Defined in

[src/components.scailo_pb.ts:224](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/components.scailo_pb.ts#L224)
