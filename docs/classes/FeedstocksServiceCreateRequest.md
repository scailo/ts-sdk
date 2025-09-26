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

[src/feedstocks.scailo_pb.ts:166](https://github.com/scailo/ts-sdk/blob/92da31e8270a275744ab051f337f3a07101c0468/src/feedstocks.scailo_pb.ts#L166)

## Properties

### description

• **description**: `string` = `""`

The description of the feedstock

**`Generated`**

from field: string description = 60;

#### Defined in

[src/feedstocks.scailo_pb.ts:157](https://github.com/scailo/ts-sdk/blob/92da31e8270a275744ab051f337f3a07101c0468/src/feedstocks.scailo_pb.ts#L157)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/feedstocks.scailo_pb.ts:66](https://github.com/scailo/ts-sdk/blob/92da31e8270a275744ab051f337f3a07101c0468/src/feedstocks.scailo_pb.ts#L66)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the ID of the associated family

**`Generated`**

from field: uint64 family_id = 33;

#### Defined in

[src/feedstocks.scailo_pb.ts:101](https://github.com/scailo/ts-sdk/blob/92da31e8270a275744ab051f337f3a07101c0468/src/feedstocks.scailo_pb.ts#L101)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 80;

#### Defined in

[src/feedstocks.scailo_pb.ts:164](https://github.com/scailo/ts-sdk/blob/92da31e8270a275744ab051f337f3a07101c0468/src/feedstocks.scailo_pb.ts#L164)

___

### internalItemCode

• **internalItemCode**: `string` = `""`

Stores the internal code (as given by user)

**`Generated`**

from field: string internal_item_code = 35;

#### Defined in

[src/feedstocks.scailo_pb.ts:108](https://github.com/scailo/ts-sdk/blob/92da31e8270a275744ab051f337f3a07101c0468/src/feedstocks.scailo_pb.ts#L108)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the item needs to be stored

**`Generated`**

from field: uint64 location_id = 54;

#### Defined in

[src/feedstocks.scailo_pb.ts:150](https://github.com/scailo/ts-sdk/blob/92da31e8270a275744ab051f337f3a07101c0468/src/feedstocks.scailo_pb.ts#L150)

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents)

**`Generated`**

from field: uint64 quantity = 37;

#### Defined in

[src/feedstocks.scailo_pb.ts:115](https://github.com/scailo/ts-sdk/blob/92da31e8270a275744ab051f337f3a07101c0468/src/feedstocks.scailo_pb.ts#L115)

___

### refFrom

• **refFrom**: [`FEEDSTOCK_REF_FROM`](../enums/FEEDSTOCK_REF_FROM.md) = `FEEDSTOCK_REF_FROM.FEEDSTOCK_REF_FROM_ANY_UNSPECIFIED`

Stores the reference from

**`Generated`**

from field: Scailo.FEEDSTOCK_REF_FROM ref_from = 31;

#### Defined in

[src/feedstocks.scailo_pb.ts:87](https://github.com/scailo/ts-sdk/blob/92da31e8270a275744ab051f337f3a07101c0468/src/feedstocks.scailo_pb.ts#L87)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

Stores the ID of the reference

**`Generated`**

from field: uint64 ref_id = 32;

#### Defined in

[src/feedstocks.scailo_pb.ts:94](https://github.com/scailo/ts-sdk/blob/92da31e8270a275744ab051f337f3a07101c0468/src/feedstocks.scailo_pb.ts#L94)

___

### secondaryQuantity

• **secondaryQuantity**: `bigint` = `protoInt64.zero`

Stores an optional quantity in the secondary unit of feedstock

**`Generated`**

from field: uint64 secondary_quantity = 40;

#### Defined in

[src/feedstocks.scailo_pb.ts:129](https://github.com/scailo/ts-sdk/blob/92da31e8270a275744ab051f337f3a07101c0468/src/feedstocks.scailo_pb.ts#L129)

___

### secondaryUomId

• **secondaryUomId**: `bigint` = `protoInt64.zero`

Stores an optional secondary unit of feedstock

**`Generated`**

from field: uint64 secondary_uom_id = 39;

#### Defined in

[src/feedstocks.scailo_pb.ts:122](https://github.com/scailo/ts-sdk/blob/92da31e8270a275744ab051f337f3a07101c0468/src/feedstocks.scailo_pb.ts#L122)

___

### shelfLifeTimestamp

• **shelfLifeTimestamp**: `bigint` = `protoInt64.zero`

Stores an optional shelf life as a timestamp

**`Generated`**

from field: uint64 shelf_life_timestamp = 41;

#### Defined in

[src/feedstocks.scailo_pb.ts:136](https://github.com/scailo/ts-sdk/blob/92da31e8270a275744ab051f337f3a07101c0468/src/feedstocks.scailo_pb.ts#L136)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/feedstocks.scailo_pb.ts:73](https://github.com/scailo/ts-sdk/blob/92da31e8270a275744ab051f337f3a07101c0468/src/feedstocks.scailo_pb.ts#L73)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 18;

#### Defined in

[src/feedstocks.scailo_pb.ts:80](https://github.com/scailo/ts-sdk/blob/92da31e8270a275744ab051f337f3a07101c0468/src/feedstocks.scailo_pb.ts#L80)

___

### warrantyTimestamp

• **warrantyTimestamp**: `bigint` = `protoInt64.zero`

Stores an optional warranty as a timestamp

**`Generated`**

from field: uint64 warranty_timestamp = 42;

#### Defined in

[src/feedstocks.scailo_pb.ts:143](https://github.com/scailo/ts-sdk/blob/92da31e8270a275744ab051f337f3a07101c0468/src/feedstocks.scailo_pb.ts#L143)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/feedstocks.scailo_pb.ts:173](https://github.com/scailo/ts-sdk/blob/92da31e8270a275744ab051f337f3a07101c0468/src/feedstocks.scailo_pb.ts#L173)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/feedstocks.scailo_pb.ts:171](https://github.com/scailo/ts-sdk/blob/92da31e8270a275744ab051f337f3a07101c0468/src/feedstocks.scailo_pb.ts#L171)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FeedstocksServiceCreateRequest"``

#### Defined in

[src/feedstocks.scailo_pb.ts:172](https://github.com/scailo/ts-sdk/blob/92da31e8270a275744ab051f337f3a07101c0468/src/feedstocks.scailo_pb.ts#L172)

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

[src/feedstocks.scailo_pb.ts:203](https://github.com/scailo/ts-sdk/blob/92da31e8270a275744ab051f337f3a07101c0468/src/feedstocks.scailo_pb.ts#L203)

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

[src/feedstocks.scailo_pb.ts:191](https://github.com/scailo/ts-sdk/blob/92da31e8270a275744ab051f337f3a07101c0468/src/feedstocks.scailo_pb.ts#L191)

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

[src/feedstocks.scailo_pb.ts:195](https://github.com/scailo/ts-sdk/blob/92da31e8270a275744ab051f337f3a07101c0468/src/feedstocks.scailo_pb.ts#L195)

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

[src/feedstocks.scailo_pb.ts:199](https://github.com/scailo/ts-sdk/blob/92da31e8270a275744ab051f337f3a07101c0468/src/feedstocks.scailo_pb.ts#L199)
