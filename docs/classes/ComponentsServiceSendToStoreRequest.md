[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ComponentsServiceSendToStoreRequest

# Class: ComponentsServiceSendToStoreRequest

Describes the parameters necessary to send a component to store

**`Generated`**

from message Scailo.ComponentsServiceSendToStoreRequest

## Hierarchy

- `Message`\<[`ComponentsServiceSendToStoreRequest`](ComponentsServiceSendToStoreRequest.md)\>

  ↳ **`ComponentsServiceSendToStoreRequest`**

## Table of contents

### Constructors

- [constructor](ComponentsServiceSendToStoreRequest.md#constructor)

### Properties

- [description](ComponentsServiceSendToStoreRequest.md#description)
- [id](ComponentsServiceSendToStoreRequest.md#id)
- [isQcReportPublic](ComponentsServiceSendToStoreRequest.md#isqcreportpublic)
- [remainingDimensions](ComponentsServiceSendToStoreRequest.md#remainingdimensions)
- [shelfLifeTimestamp](ComponentsServiceSendToStoreRequest.md#shelflifetimestamp)
- [storageId](ComponentsServiceSendToStoreRequest.md#storageid)
- [storeId](ComponentsServiceSendToStoreRequest.md#storeid)
- [userComment](ComponentsServiceSendToStoreRequest.md#usercomment)
- [warrantyTimestamp](ComponentsServiceSendToStoreRequest.md#warrantytimestamp)
- [fields](ComponentsServiceSendToStoreRequest.md#fields)
- [runtime](ComponentsServiceSendToStoreRequest.md#runtime)
- [typeName](ComponentsServiceSendToStoreRequest.md#typename)

### Methods

- [clone](ComponentsServiceSendToStoreRequest.md#clone)
- [equals](ComponentsServiceSendToStoreRequest.md#equals)
- [fromBinary](ComponentsServiceSendToStoreRequest.md#frombinary)
- [fromJson](ComponentsServiceSendToStoreRequest.md#fromjson)
- [fromJsonString](ComponentsServiceSendToStoreRequest.md#fromjsonstring)
- [getType](ComponentsServiceSendToStoreRequest.md#gettype)
- [toBinary](ComponentsServiceSendToStoreRequest.md#tobinary)
- [toJSON](ComponentsServiceSendToStoreRequest.md#tojson)
- [toJson](ComponentsServiceSendToStoreRequest.md#tojson-1)
- [toJsonString](ComponentsServiceSendToStoreRequest.md#tojsonstring)
- [equals](ComponentsServiceSendToStoreRequest.md#equals-1)
- [fromBinary](ComponentsServiceSendToStoreRequest.md#frombinary-1)
- [fromJson](ComponentsServiceSendToStoreRequest.md#fromjson-1)
- [fromJsonString](ComponentsServiceSendToStoreRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ComponentsServiceSendToStoreRequest**(`data?`): [`ComponentsServiceSendToStoreRequest`](ComponentsServiceSendToStoreRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ComponentsServiceSendToStoreRequest`](ComponentsServiceSendToStoreRequest.md)\> |

#### Returns

[`ComponentsServiceSendToStoreRequest`](ComponentsServiceSendToStoreRequest.md)

#### Overrides

Message\&lt;ComponentsServiceSendToStoreRequest\&gt;.constructor

#### Defined in

src/components.scailo_pb.ts:423

## Properties

### description

• **description**: `string` = `""`

The description of the component

**`Generated`**

from field: string description = 60;

#### Defined in

src/components.scailo_pb.ts:421

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/components.scailo_pb.ts:372

___

### isQcReportPublic

• **isQcReportPublic**: `boolean` = `false`

Stores if the associated QC report should be public

**`Generated`**

from field: bool is_qc_report_public = 52;

#### Defined in

src/components.scailo_pb.ts:407

___

### remainingDimensions

• **remainingDimensions**: `string` = `""`

Stores any applicable remaining dimensions as a string

**`Generated`**

from field: string remaining_dimensions = 55;

#### Defined in

src/components.scailo_pb.ts:414

___

### shelfLifeTimestamp

• **shelfLifeTimestamp**: `bigint` = `protoInt64.zero`

Stores an optional shelf life as a timestamp

**`Generated`**

from field: uint64 shelf_life_timestamp = 40;

#### Defined in

src/components.scailo_pb.ts:379

___

### storageId

• **storageId**: `bigint` = `protoInt64.zero`

Stores an optional ID of the associated storage that the component is stored in

**`Generated`**

from field: uint64 storage_id = 51;

#### Defined in

src/components.scailo_pb.ts:400

___

### storeId

• **storeId**: `bigint` = `protoInt64.zero`

Stores the store to which the component is sent to

**`Generated`**

from field: uint64 store_id = 50;

#### Defined in

src/components.scailo_pb.ts:393

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/components.scailo_pb.ts:365

___

### warrantyTimestamp

• **warrantyTimestamp**: `bigint` = `protoInt64.zero`

Stores an optional warranty as a timestamp

**`Generated`**

from field: uint64 warranty_timestamp = 41;

#### Defined in

src/components.scailo_pb.ts:386

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/components.scailo_pb.ts:430

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/components.scailo_pb.ts:428

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ComponentsServiceSendToStoreRequest"``

#### Defined in

src/components.scailo_pb.ts:429

## Methods

### clone

▸ **clone**(): [`ComponentsServiceSendToStoreRequest`](ComponentsServiceSendToStoreRequest.md)

Create a deep copy.

#### Returns

[`ComponentsServiceSendToStoreRequest`](ComponentsServiceSendToStoreRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ComponentsServiceSendToStoreRequest`](ComponentsServiceSendToStoreRequest.md) \| `PlainMessage`\<[`ComponentsServiceSendToStoreRequest`](ComponentsServiceSendToStoreRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ComponentsServiceSendToStoreRequest`](ComponentsServiceSendToStoreRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ComponentsServiceSendToStoreRequest`](ComponentsServiceSendToStoreRequest.md)\>

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
| `a` | `undefined` \| [`ComponentsServiceSendToStoreRequest`](ComponentsServiceSendToStoreRequest.md) \| `PlainMessage`\<[`ComponentsServiceSendToStoreRequest`](ComponentsServiceSendToStoreRequest.md)\> |
| `b` | `undefined` \| [`ComponentsServiceSendToStoreRequest`](ComponentsServiceSendToStoreRequest.md) \| `PlainMessage`\<[`ComponentsServiceSendToStoreRequest`](ComponentsServiceSendToStoreRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/components.scailo_pb.ts:454

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ComponentsServiceSendToStoreRequest`](ComponentsServiceSendToStoreRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ComponentsServiceSendToStoreRequest`](ComponentsServiceSendToStoreRequest.md)

#### Defined in

src/components.scailo_pb.ts:442

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ComponentsServiceSendToStoreRequest`](ComponentsServiceSendToStoreRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ComponentsServiceSendToStoreRequest`](ComponentsServiceSendToStoreRequest.md)

#### Defined in

src/components.scailo_pb.ts:446

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ComponentsServiceSendToStoreRequest`](ComponentsServiceSendToStoreRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ComponentsServiceSendToStoreRequest`](ComponentsServiceSendToStoreRequest.md)

#### Defined in

src/components.scailo_pb.ts:450
