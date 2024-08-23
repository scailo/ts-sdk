[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / WorkOrdersServiceCreateRequest

# Class: WorkOrdersServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.WorkOrdersServiceCreateRequest

## Hierarchy

- `Message`\<[`WorkOrdersServiceCreateRequest`](WorkOrdersServiceCreateRequest.md)\>

  ↳ **`WorkOrdersServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](WorkOrdersServiceCreateRequest.md#constructor)

### Properties

- [entityUuid](WorkOrdersServiceCreateRequest.md#entityuuid)
- [formData](WorkOrdersServiceCreateRequest.md#formdata)
- [locationId](WorkOrdersServiceCreateRequest.md#locationid)
- [refFrom](WorkOrdersServiceCreateRequest.md#reffrom)
- [refId](WorkOrdersServiceCreateRequest.md#refid)
- [referenceId](WorkOrdersServiceCreateRequest.md#referenceid)
- [userComment](WorkOrdersServiceCreateRequest.md#usercomment)
- [vaultFolderId](WorkOrdersServiceCreateRequest.md#vaultfolderid)
- [fields](WorkOrdersServiceCreateRequest.md#fields)
- [runtime](WorkOrdersServiceCreateRequest.md#runtime)
- [typeName](WorkOrdersServiceCreateRequest.md#typename)

### Methods

- [clone](WorkOrdersServiceCreateRequest.md#clone)
- [equals](WorkOrdersServiceCreateRequest.md#equals)
- [fromBinary](WorkOrdersServiceCreateRequest.md#frombinary)
- [fromJson](WorkOrdersServiceCreateRequest.md#fromjson)
- [fromJsonString](WorkOrdersServiceCreateRequest.md#fromjsonstring)
- [getType](WorkOrdersServiceCreateRequest.md#gettype)
- [toBinary](WorkOrdersServiceCreateRequest.md#tobinary)
- [toJSON](WorkOrdersServiceCreateRequest.md#tojson)
- [toJson](WorkOrdersServiceCreateRequest.md#tojson-1)
- [toJsonString](WorkOrdersServiceCreateRequest.md#tojsonstring)
- [equals](WorkOrdersServiceCreateRequest.md#equals-1)
- [fromBinary](WorkOrdersServiceCreateRequest.md#frombinary-1)
- [fromJson](WorkOrdersServiceCreateRequest.md#fromjson-1)
- [fromJsonString](WorkOrdersServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new WorkOrdersServiceCreateRequest**(`data?`): [`WorkOrdersServiceCreateRequest`](WorkOrdersServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`WorkOrdersServiceCreateRequest`](WorkOrdersServiceCreateRequest.md)\> |

#### Returns

[`WorkOrdersServiceCreateRequest`](WorkOrdersServiceCreateRequest.md)

#### Overrides

Message\&lt;WorkOrdersServiceCreateRequest\&gt;.constructor

#### Defined in

src/work_orders.scailo_pb.ts:283

## Properties

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/work_orders.scailo_pb.ts:232

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

src/work_orders.scailo_pb.ts:281

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 location_id = 14;

#### Defined in

src/work_orders.scailo_pb.ts:274

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 12;

#### Defined in

src/work_orders.scailo_pb.ts:260

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

src/work_orders.scailo_pb.ts:267

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the work order

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/work_orders.scailo_pb.ts:253

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/work_orders.scailo_pb.ts:239

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/work_orders.scailo_pb.ts:246

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/work_orders.scailo_pb.ts:290

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/work_orders.scailo_pb.ts:288

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.WorkOrdersServiceCreateRequest"``

#### Defined in

src/work_orders.scailo_pb.ts:289

## Methods

### clone

▸ **clone**(): [`WorkOrdersServiceCreateRequest`](WorkOrdersServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`WorkOrdersServiceCreateRequest`](WorkOrdersServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`WorkOrdersServiceCreateRequest`](WorkOrdersServiceCreateRequest.md) \| `PlainMessage`\<[`WorkOrdersServiceCreateRequest`](WorkOrdersServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`WorkOrdersServiceCreateRequest`](WorkOrdersServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`WorkOrdersServiceCreateRequest`](WorkOrdersServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`WorkOrdersServiceCreateRequest`](WorkOrdersServiceCreateRequest.md) \| `PlainMessage`\<[`WorkOrdersServiceCreateRequest`](WorkOrdersServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`WorkOrdersServiceCreateRequest`](WorkOrdersServiceCreateRequest.md) \| `PlainMessage`\<[`WorkOrdersServiceCreateRequest`](WorkOrdersServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/work_orders.scailo_pb.ts:313

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`WorkOrdersServiceCreateRequest`](WorkOrdersServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`WorkOrdersServiceCreateRequest`](WorkOrdersServiceCreateRequest.md)

#### Defined in

src/work_orders.scailo_pb.ts:301

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`WorkOrdersServiceCreateRequest`](WorkOrdersServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`WorkOrdersServiceCreateRequest`](WorkOrdersServiceCreateRequest.md)

#### Defined in

src/work_orders.scailo_pb.ts:305

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`WorkOrdersServiceCreateRequest`](WorkOrdersServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`WorkOrdersServiceCreateRequest`](WorkOrdersServiceCreateRequest.md)

#### Defined in

src/work_orders.scailo_pb.ts:309
