[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / EquipmentsServiceUpdateRequest

# Class: EquipmentsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.EquipmentsServiceUpdateRequest

## Hierarchy

- `Message`\<[`EquipmentsServiceUpdateRequest`](EquipmentsServiceUpdateRequest.md)\>

  ↳ **`EquipmentsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](EquipmentsServiceUpdateRequest.md#constructor)

### Properties

- [description](EquipmentsServiceUpdateRequest.md#description)
- [id](EquipmentsServiceUpdateRequest.md#id)
- [internalItemCode](EquipmentsServiceUpdateRequest.md#internalitemcode)
- [isQcReportPublic](EquipmentsServiceUpdateRequest.md#isqcreportpublic)
- [notifyUsers](EquipmentsServiceUpdateRequest.md#notifyusers)
- [remainingDimensions](EquipmentsServiceUpdateRequest.md#remainingdimensions)
- [secondaryQuantity](EquipmentsServiceUpdateRequest.md#secondaryquantity)
- [secondaryUomId](EquipmentsServiceUpdateRequest.md#secondaryuomid)
- [shelfLifeTimestamp](EquipmentsServiceUpdateRequest.md#shelflifetimestamp)
- [storageId](EquipmentsServiceUpdateRequest.md#storageid)
- [userComment](EquipmentsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](EquipmentsServiceUpdateRequest.md#vaultfolderid)
- [warrantyTimestamp](EquipmentsServiceUpdateRequest.md#warrantytimestamp)
- [fields](EquipmentsServiceUpdateRequest.md#fields)
- [runtime](EquipmentsServiceUpdateRequest.md#runtime)
- [typeName](EquipmentsServiceUpdateRequest.md#typename)

### Methods

- [clone](EquipmentsServiceUpdateRequest.md#clone)
- [equals](EquipmentsServiceUpdateRequest.md#equals)
- [fromBinary](EquipmentsServiceUpdateRequest.md#frombinary)
- [fromJson](EquipmentsServiceUpdateRequest.md#fromjson)
- [fromJsonString](EquipmentsServiceUpdateRequest.md#fromjsonstring)
- [getType](EquipmentsServiceUpdateRequest.md#gettype)
- [toBinary](EquipmentsServiceUpdateRequest.md#tobinary)
- [toJSON](EquipmentsServiceUpdateRequest.md#tojson)
- [toJson](EquipmentsServiceUpdateRequest.md#tojson-1)
- [toJsonString](EquipmentsServiceUpdateRequest.md#tojsonstring)
- [equals](EquipmentsServiceUpdateRequest.md#equals-1)
- [fromBinary](EquipmentsServiceUpdateRequest.md#frombinary-1)
- [fromJson](EquipmentsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](EquipmentsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquipmentsServiceUpdateRequest**(`data?`): [`EquipmentsServiceUpdateRequest`](EquipmentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EquipmentsServiceUpdateRequest`](EquipmentsServiceUpdateRequest.md)\> |

#### Returns

[`EquipmentsServiceUpdateRequest`](EquipmentsServiceUpdateRequest.md)

#### Overrides

Message\&lt;EquipmentsServiceUpdateRequest\&gt;.constructor

#### Defined in

src/equipments.scailo_pb.ts:297

## Properties

### description

• **description**: `string` = `""`

The description of the equipment

**`Generated`**

from field: string description = 60;

#### Defined in

src/equipments.scailo_pb.ts:295

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/equipments.scailo_pb.ts:218

___

### internalItemCode

• **internalItemCode**: `string` = `""`

Stores the internal code (as given by user)

**`Generated`**

from field: string internal_item_code = 35;

#### Defined in

src/equipments.scailo_pb.ts:239

___

### isQcReportPublic

• **isQcReportPublic**: `boolean` = `false`

Stores if the associated QC report should be public

**`Generated`**

from field: bool is_qc_report_public = 52;

#### Defined in

src/equipments.scailo_pb.ts:281

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

src/equipments.scailo_pb.ts:225

___

### remainingDimensions

• **remainingDimensions**: `string` = `""`

Stores any applicable remaining dimensions as a string

**`Generated`**

from field: string remaining_dimensions = 55;

#### Defined in

src/equipments.scailo_pb.ts:288

___

### secondaryQuantity

• **secondaryQuantity**: `bigint` = `protoInt64.zero`

Stores an optional quantity in the secondary unit of equipment

**`Generated`**

from field: uint64 secondary_quantity = 39;

#### Defined in

src/equipments.scailo_pb.ts:253

___

### secondaryUomId

• **secondaryUomId**: `bigint` = `protoInt64.zero`

Stores an optional secondary unit of equipment

**`Generated`**

from field: uint64 secondary_uom_id = 38;

#### Defined in

src/equipments.scailo_pb.ts:246

___

### shelfLifeTimestamp

• **shelfLifeTimestamp**: `bigint` = `protoInt64.zero`

Stores an optional shelf life as a timestamp

**`Generated`**

from field: uint64 shelf_life_timestamp = 40;

#### Defined in

src/equipments.scailo_pb.ts:260

___

### storageId

• **storageId**: `bigint` = `protoInt64.zero`

Stores an optional ID of the associated storage that the equipment is stored in

**`Generated`**

from field: uint64 storage_id = 51;

#### Defined in

src/equipments.scailo_pb.ts:274

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/equipments.scailo_pb.ts:211

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 18;

#### Defined in

src/equipments.scailo_pb.ts:232

___

### warrantyTimestamp

• **warrantyTimestamp**: `bigint` = `protoInt64.zero`

Stores an optional warranty as a timestamp

**`Generated`**

from field: uint64 warranty_timestamp = 41;

#### Defined in

src/equipments.scailo_pb.ts:267

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/equipments.scailo_pb.ts:304

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/equipments.scailo_pb.ts:302

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EquipmentsServiceUpdateRequest"``

#### Defined in

src/equipments.scailo_pb.ts:303

## Methods

### clone

▸ **clone**(): [`EquipmentsServiceUpdateRequest`](EquipmentsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`EquipmentsServiceUpdateRequest`](EquipmentsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`EquipmentsServiceUpdateRequest`](EquipmentsServiceUpdateRequest.md) \| `PlainMessage`\<[`EquipmentsServiceUpdateRequest`](EquipmentsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`EquipmentsServiceUpdateRequest`](EquipmentsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EquipmentsServiceUpdateRequest`](EquipmentsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`EquipmentsServiceUpdateRequest`](EquipmentsServiceUpdateRequest.md) \| `PlainMessage`\<[`EquipmentsServiceUpdateRequest`](EquipmentsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`EquipmentsServiceUpdateRequest`](EquipmentsServiceUpdateRequest.md) \| `PlainMessage`\<[`EquipmentsServiceUpdateRequest`](EquipmentsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/equipments.scailo_pb.ts:332

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquipmentsServiceUpdateRequest`](EquipmentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EquipmentsServiceUpdateRequest`](EquipmentsServiceUpdateRequest.md)

#### Defined in

src/equipments.scailo_pb.ts:320

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquipmentsServiceUpdateRequest`](EquipmentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquipmentsServiceUpdateRequest`](EquipmentsServiceUpdateRequest.md)

#### Defined in

src/equipments.scailo_pb.ts:324

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquipmentsServiceUpdateRequest`](EquipmentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquipmentsServiceUpdateRequest`](EquipmentsServiceUpdateRequest.md)

#### Defined in

src/equipments.scailo_pb.ts:328
