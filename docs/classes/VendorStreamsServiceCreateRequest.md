[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorStreamsServiceCreateRequest

# Class: VendorStreamsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.VendorStreamsServiceCreateRequest

## Hierarchy

- `Message`\<[`VendorStreamsServiceCreateRequest`](VendorStreamsServiceCreateRequest.md)\>

  ↳ **`VendorStreamsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](VendorStreamsServiceCreateRequest.md#constructor)

### Properties

- [assignSelfAsInternalSubscriber](VendorStreamsServiceCreateRequest.md#assignselfasinternalsubscriber)
- [assignSelfAsVendorSubscriber](VendorStreamsServiceCreateRequest.md#assignselfasvendorsubscriber)
- [entityUuid](VendorStreamsServiceCreateRequest.md#entityuuid)
- [refFrom](VendorStreamsServiceCreateRequest.md#reffrom)
- [refId](VendorStreamsServiceCreateRequest.md#refid)
- [title](VendorStreamsServiceCreateRequest.md#title)
- [userComment](VendorStreamsServiceCreateRequest.md#usercomment)
- [vaultFolderId](VendorStreamsServiceCreateRequest.md#vaultfolderid)
- [vendorId](VendorStreamsServiceCreateRequest.md#vendorid)
- [fields](VendorStreamsServiceCreateRequest.md#fields)
- [runtime](VendorStreamsServiceCreateRequest.md#runtime)
- [typeName](VendorStreamsServiceCreateRequest.md#typename)

### Methods

- [clone](VendorStreamsServiceCreateRequest.md#clone)
- [equals](VendorStreamsServiceCreateRequest.md#equals)
- [fromBinary](VendorStreamsServiceCreateRequest.md#frombinary)
- [fromJson](VendorStreamsServiceCreateRequest.md#fromjson)
- [fromJsonString](VendorStreamsServiceCreateRequest.md#fromjsonstring)
- [getType](VendorStreamsServiceCreateRequest.md#gettype)
- [toBinary](VendorStreamsServiceCreateRequest.md#tobinary)
- [toJSON](VendorStreamsServiceCreateRequest.md#tojson)
- [toJson](VendorStreamsServiceCreateRequest.md#tojson-1)
- [toJsonString](VendorStreamsServiceCreateRequest.md#tojsonstring)
- [equals](VendorStreamsServiceCreateRequest.md#equals-1)
- [fromBinary](VendorStreamsServiceCreateRequest.md#frombinary-1)
- [fromJson](VendorStreamsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](VendorStreamsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorStreamsServiceCreateRequest**(`data?`): [`VendorStreamsServiceCreateRequest`](VendorStreamsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorStreamsServiceCreateRequest`](VendorStreamsServiceCreateRequest.md)\> |

#### Returns

[`VendorStreamsServiceCreateRequest`](VendorStreamsServiceCreateRequest.md)

#### Overrides

Message\&lt;VendorStreamsServiceCreateRequest\&gt;.constructor

#### Defined in

src/vendorstreams.scailo_pb.ts:425

## Properties

### assignSelfAsInternalSubscriber

• **assignSelfAsInternalSubscriber**: `boolean` = `false`

Assign self (the user creating the stream) as an internal subscriber

**`Generated`**

from field: bool assign_self_as_internal_subscriber = 80;

#### Defined in

src/vendorstreams.scailo_pb.ts:416

___

### assignSelfAsVendorSubscriber

• **assignSelfAsVendorSubscriber**: `boolean` = `false`

Assign self (the user creating the stream) as a vendor subscriber (this would allow vendor users to also create a stream)

**`Generated`**

from field: bool assign_self_as_vendor_subscriber = 81;

#### Defined in

src/vendorstreams.scailo_pb.ts:423

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/vendorstreams.scailo_pb.ts:367

___

### refFrom

• **refFrom**: [`VENDOR_STREAM_REF_FROM`](../enums/VENDOR_STREAM_REF_FROM.md) = `VENDOR_STREAM_REF_FROM.VENDOR_STREAM_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.VENDOR_STREAM_REF_FROM ref_from = 12;

#### Defined in

src/vendorstreams.scailo_pb.ts:402

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated reference ID

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

src/vendorstreams.scailo_pb.ts:409

___

### title

• **title**: `string` = `""`

The title of the vendor stream

**`Generated`**

from field: string title = 10;

#### Defined in

src/vendorstreams.scailo_pb.ts:388

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/vendorstreams.scailo_pb.ts:374

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 7;

#### Defined in

src/vendorstreams.scailo_pb.ts:381

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The ID of the vendor

**`Generated`**

from field: uint64 vendor_id = 11;

#### Defined in

src/vendorstreams.scailo_pb.ts:395

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vendorstreams.scailo_pb.ts:432

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vendorstreams.scailo_pb.ts:430

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorStreamsServiceCreateRequest"``

#### Defined in

src/vendorstreams.scailo_pb.ts:431

## Methods

### clone

▸ **clone**(): [`VendorStreamsServiceCreateRequest`](VendorStreamsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`VendorStreamsServiceCreateRequest`](VendorStreamsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorStreamsServiceCreateRequest`](VendorStreamsServiceCreateRequest.md) \| `PlainMessage`\<[`VendorStreamsServiceCreateRequest`](VendorStreamsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorStreamsServiceCreateRequest`](VendorStreamsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorStreamsServiceCreateRequest`](VendorStreamsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`VendorStreamsServiceCreateRequest`](VendorStreamsServiceCreateRequest.md) \| `PlainMessage`\<[`VendorStreamsServiceCreateRequest`](VendorStreamsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`VendorStreamsServiceCreateRequest`](VendorStreamsServiceCreateRequest.md) \| `PlainMessage`\<[`VendorStreamsServiceCreateRequest`](VendorStreamsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/vendorstreams.scailo_pb.ts:456

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorStreamsServiceCreateRequest`](VendorStreamsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorStreamsServiceCreateRequest`](VendorStreamsServiceCreateRequest.md)

#### Defined in

src/vendorstreams.scailo_pb.ts:444

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorStreamsServiceCreateRequest`](VendorStreamsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorStreamsServiceCreateRequest`](VendorStreamsServiceCreateRequest.md)

#### Defined in

src/vendorstreams.scailo_pb.ts:448

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorStreamsServiceCreateRequest`](VendorStreamsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorStreamsServiceCreateRequest`](VendorStreamsServiceCreateRequest.md)

#### Defined in

src/vendorstreams.scailo_pb.ts:452
