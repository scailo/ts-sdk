[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FeedstocksServiceCreateRequest

# Class: FeedstocksServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.FeedstocksServiceCreateRequest

## Hierarchy

- `Message`\<[`FeedstocksServiceCreateRequest`](FeedstocksServiceCreateRequest.md)\>

  ↳ **`FeedstocksServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](FeedstocksServiceCreateRequest.md#constructor)

### Properties

- [description](FeedstocksServiceCreateRequest.md#description)
- [entityUuid](FeedstocksServiceCreateRequest.md#entityuuid)
- [familyId](FeedstocksServiceCreateRequest.md#familyid)
- [formData](FeedstocksServiceCreateRequest.md#formdata)
- [internalItemCode](FeedstocksServiceCreateRequest.md#internalitemcode)
- [locationId](FeedstocksServiceCreateRequest.md#locationid)
- [quantity](FeedstocksServiceCreateRequest.md#quantity)
- [refFrom](FeedstocksServiceCreateRequest.md#reffrom)
- [refId](FeedstocksServiceCreateRequest.md#refid)
- [secondaryQuantity](FeedstocksServiceCreateRequest.md#secondaryquantity)
- [secondaryUomId](FeedstocksServiceCreateRequest.md#secondaryuomid)
- [shelfLifeTimestamp](FeedstocksServiceCreateRequest.md#shelflifetimestamp)
- [userComment](FeedstocksServiceCreateRequest.md#usercomment)
- [vaultFolderId](FeedstocksServiceCreateRequest.md#vaultfolderid)
- [warrantyTimestamp](FeedstocksServiceCreateRequest.md#warrantytimestamp)
- [fields](FeedstocksServiceCreateRequest.md#fields)
- [runtime](FeedstocksServiceCreateRequest.md#runtime)
- [typeName](FeedstocksServiceCreateRequest.md#typename)

### Methods

- [clone](FeedstocksServiceCreateRequest.md#clone)
- [equals](FeedstocksServiceCreateRequest.md#equals)
- [fromBinary](FeedstocksServiceCreateRequest.md#frombinary)
- [fromJson](FeedstocksServiceCreateRequest.md#fromjson)
- [fromJsonString](FeedstocksServiceCreateRequest.md#fromjsonstring)
- [getType](FeedstocksServiceCreateRequest.md#gettype)
- [toBinary](FeedstocksServiceCreateRequest.md#tobinary)
- [toJSON](FeedstocksServiceCreateRequest.md#tojson)
- [toJson](FeedstocksServiceCreateRequest.md#tojson-1)
- [toJsonString](FeedstocksServiceCreateRequest.md#tojsonstring)
- [equals](FeedstocksServiceCreateRequest.md#equals-1)
- [fromBinary](FeedstocksServiceCreateRequest.md#frombinary-1)
- [fromJson](FeedstocksServiceCreateRequest.md#fromjson-1)
- [fromJsonString](FeedstocksServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new FeedstocksServiceCreateRequest**(`data?`): [`FeedstocksServiceCreateRequest`](FeedstocksServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FeedstocksServiceCreateRequest`](FeedstocksServiceCreateRequest.md)\> |

#### Returns

[`FeedstocksServiceCreateRequest`](FeedstocksServiceCreateRequest.md)

#### Overrides

Message\&lt;FeedstocksServiceCreateRequest\&gt;.constructor

#### Defined in

[src/feedstocks.scailo_pb.ts:175](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/feedstocks.scailo_pb.ts#L175)

## Properties

### description

• **description**: `string` = `""`

The description of the feedstock

**`Generated`**

from field: string description = 60;

#### Defined in

[src/feedstocks.scailo_pb.ts:166](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/feedstocks.scailo_pb.ts#L166)

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

[src/feedstocks.scailo_pb.ts:75](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/feedstocks.scailo_pb.ts#L75)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the ID of the associated family

**`Generated`**

from field: uint64 family_id = 33;

#### Defined in

[src/feedstocks.scailo_pb.ts:110](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/feedstocks.scailo_pb.ts#L110)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 80;

#### Defined in

[src/feedstocks.scailo_pb.ts:173](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/feedstocks.scailo_pb.ts#L173)

___

### internalItemCode

• **internalItemCode**: `string` = `""`

Stores the internal code (as given by user)

**`Generated`**

from field: string internal_item_code = 35;

#### Defined in

[src/feedstocks.scailo_pb.ts:117](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/feedstocks.scailo_pb.ts#L117)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the item needs to be stored

**`Generated`**

from field: uint64 location_id = 54;

#### Defined in

[src/feedstocks.scailo_pb.ts:159](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/feedstocks.scailo_pb.ts#L159)

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents)

**`Generated`**

from field: uint64 quantity = 37;

#### Defined in

[src/feedstocks.scailo_pb.ts:124](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/feedstocks.scailo_pb.ts#L124)

___

### refFrom

• **refFrom**: [`FEEDSTOCK_REF_FROM`](../enums/FEEDSTOCK_REF_FROM.md) = `FEEDSTOCK_REF_FROM.FEEDSTOCK_REF_FROM_ANY_UNSPECIFIED`

Stores the reference from

**`Generated`**

from field: Scailo.FEEDSTOCK_REF_FROM ref_from = 31;

#### Defined in

[src/feedstocks.scailo_pb.ts:96](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/feedstocks.scailo_pb.ts#L96)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

Stores the ID of the reference

**`Generated`**

from field: uint64 ref_id = 32;

#### Defined in

[src/feedstocks.scailo_pb.ts:103](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/feedstocks.scailo_pb.ts#L103)

___

### secondaryQuantity

• **secondaryQuantity**: `bigint` = `protoInt64.zero`

Stores an optional quantity in the secondary unit of feedstock

**`Generated`**

from field: uint64 secondary_quantity = 40;

#### Defined in

[src/feedstocks.scailo_pb.ts:138](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/feedstocks.scailo_pb.ts#L138)

___

### secondaryUomId

• **secondaryUomId**: `bigint` = `protoInt64.zero`

Stores an optional secondary unit of feedstock

**`Generated`**

from field: uint64 secondary_uom_id = 39;

#### Defined in

[src/feedstocks.scailo_pb.ts:131](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/feedstocks.scailo_pb.ts#L131)

___

### shelfLifeTimestamp

• **shelfLifeTimestamp**: `bigint` = `protoInt64.zero`

Stores an optional shelf life as a timestamp

**`Generated`**

from field: uint64 shelf_life_timestamp = 41;

#### Defined in

[src/feedstocks.scailo_pb.ts:145](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/feedstocks.scailo_pb.ts#L145)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/feedstocks.scailo_pb.ts:82](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/feedstocks.scailo_pb.ts#L82)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 18;

#### Defined in

[src/feedstocks.scailo_pb.ts:89](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/feedstocks.scailo_pb.ts#L89)

___

### warrantyTimestamp

• **warrantyTimestamp**: `bigint` = `protoInt64.zero`

Stores an optional warranty as a timestamp

**`Generated`**

from field: uint64 warranty_timestamp = 42;

#### Defined in

[src/feedstocks.scailo_pb.ts:152](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/feedstocks.scailo_pb.ts#L152)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/feedstocks.scailo_pb.ts:182](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/feedstocks.scailo_pb.ts#L182)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/feedstocks.scailo_pb.ts:180](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/feedstocks.scailo_pb.ts#L180)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FeedstocksServiceCreateRequest"``

#### Defined in

[src/feedstocks.scailo_pb.ts:181](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/feedstocks.scailo_pb.ts#L181)

## Methods

### clone

▸ **clone**(): [`FeedstocksServiceCreateRequest`](FeedstocksServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`FeedstocksServiceCreateRequest`](FeedstocksServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`FeedstocksServiceCreateRequest`](FeedstocksServiceCreateRequest.md) \| `PlainMessage`\<[`FeedstocksServiceCreateRequest`](FeedstocksServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`FeedstocksServiceCreateRequest`](FeedstocksServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FeedstocksServiceCreateRequest`](FeedstocksServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`FeedstocksServiceCreateRequest`](FeedstocksServiceCreateRequest.md) \| `PlainMessage`\<[`FeedstocksServiceCreateRequest`](FeedstocksServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`FeedstocksServiceCreateRequest`](FeedstocksServiceCreateRequest.md) \| `PlainMessage`\<[`FeedstocksServiceCreateRequest`](FeedstocksServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/feedstocks.scailo_pb.ts:212](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/feedstocks.scailo_pb.ts#L212)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FeedstocksServiceCreateRequest`](FeedstocksServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FeedstocksServiceCreateRequest`](FeedstocksServiceCreateRequest.md)

#### Defined in

[src/feedstocks.scailo_pb.ts:200](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/feedstocks.scailo_pb.ts#L200)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FeedstocksServiceCreateRequest`](FeedstocksServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FeedstocksServiceCreateRequest`](FeedstocksServiceCreateRequest.md)

#### Defined in

[src/feedstocks.scailo_pb.ts:204](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/feedstocks.scailo_pb.ts#L204)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FeedstocksServiceCreateRequest`](FeedstocksServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FeedstocksServiceCreateRequest`](FeedstocksServiceCreateRequest.md)

#### Defined in

[src/feedstocks.scailo_pb.ts:208](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/feedstocks.scailo_pb.ts#L208)
