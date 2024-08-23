[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / ProductionIndentsServiceItemCreateRequest

# Class: ProductionIndentsServiceItemCreateRequest

Describes the parameters required to add an item to a production indent

**`Generated`**

from message Scailo.ProductionIndentsServiceItemCreateRequest

## Hierarchy

- `Message`\<[`ProductionIndentsServiceItemCreateRequest`](ProductionIndentsServiceItemCreateRequest.md)\>

  ↳ **`ProductionIndentsServiceItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](ProductionIndentsServiceItemCreateRequest.md#constructor)

### Properties

- [familyId](ProductionIndentsServiceItemCreateRequest.md#familyid)
- [internalQuantity](ProductionIndentsServiceItemCreateRequest.md#internalquantity)
- [productionIndentId](ProductionIndentsServiceItemCreateRequest.md#productionindentid)
- [userComment](ProductionIndentsServiceItemCreateRequest.md#usercomment)
- [fields](ProductionIndentsServiceItemCreateRequest.md#fields)
- [runtime](ProductionIndentsServiceItemCreateRequest.md#runtime)
- [typeName](ProductionIndentsServiceItemCreateRequest.md#typename)

### Methods

- [clone](ProductionIndentsServiceItemCreateRequest.md#clone)
- [equals](ProductionIndentsServiceItemCreateRequest.md#equals)
- [fromBinary](ProductionIndentsServiceItemCreateRequest.md#frombinary)
- [fromJson](ProductionIndentsServiceItemCreateRequest.md#fromjson)
- [fromJsonString](ProductionIndentsServiceItemCreateRequest.md#fromjsonstring)
- [getType](ProductionIndentsServiceItemCreateRequest.md#gettype)
- [toBinary](ProductionIndentsServiceItemCreateRequest.md#tobinary)
- [toJSON](ProductionIndentsServiceItemCreateRequest.md#tojson)
- [toJson](ProductionIndentsServiceItemCreateRequest.md#tojson-1)
- [toJsonString](ProductionIndentsServiceItemCreateRequest.md#tojsonstring)
- [equals](ProductionIndentsServiceItemCreateRequest.md#equals-1)
- [fromBinary](ProductionIndentsServiceItemCreateRequest.md#frombinary-1)
- [fromJson](ProductionIndentsServiceItemCreateRequest.md#fromjson-1)
- [fromJsonString](ProductionIndentsServiceItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionIndentsServiceItemCreateRequest**(`data?`): [`ProductionIndentsServiceItemCreateRequest`](ProductionIndentsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProductionIndentsServiceItemCreateRequest`](ProductionIndentsServiceItemCreateRequest.md)\> |

#### Returns

[`ProductionIndentsServiceItemCreateRequest`](ProductionIndentsServiceItemCreateRequest.md)

#### Overrides

Message\&lt;ProductionIndentsServiceItemCreateRequest\&gt;.constructor

#### Defined in

src/production_indents.scailo_pb.ts:687

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/production_indents.scailo_pb.ts:678

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity required

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

src/production_indents.scailo_pb.ts:685

___

### productionIndentId

• **productionIndentId**: `bigint` = `protoInt64.zero`

Stores the production indent ID

**`Generated`**

from field: uint64 production_indent_id = 10;

#### Defined in

src/production_indents.scailo_pb.ts:671

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/production_indents.scailo_pb.ts:664

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/production_indents.scailo_pb.ts:694

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/production_indents.scailo_pb.ts:692

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProductionIndentsServiceItemCreateRequest"``

#### Defined in

src/production_indents.scailo_pb.ts:693

## Methods

### clone

▸ **clone**(): [`ProductionIndentsServiceItemCreateRequest`](ProductionIndentsServiceItemCreateRequest.md)

Create a deep copy.

#### Returns

[`ProductionIndentsServiceItemCreateRequest`](ProductionIndentsServiceItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionIndentsServiceItemCreateRequest`](ProductionIndentsServiceItemCreateRequest.md) \| `PlainMessage`\<[`ProductionIndentsServiceItemCreateRequest`](ProductionIndentsServiceItemCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProductionIndentsServiceItemCreateRequest`](ProductionIndentsServiceItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProductionIndentsServiceItemCreateRequest`](ProductionIndentsServiceItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`ProductionIndentsServiceItemCreateRequest`](ProductionIndentsServiceItemCreateRequest.md) \| `PlainMessage`\<[`ProductionIndentsServiceItemCreateRequest`](ProductionIndentsServiceItemCreateRequest.md)\> |
| `b` | `undefined` \| [`ProductionIndentsServiceItemCreateRequest`](ProductionIndentsServiceItemCreateRequest.md) \| `PlainMessage`\<[`ProductionIndentsServiceItemCreateRequest`](ProductionIndentsServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/production_indents.scailo_pb.ts:713

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionIndentsServiceItemCreateRequest`](ProductionIndentsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProductionIndentsServiceItemCreateRequest`](ProductionIndentsServiceItemCreateRequest.md)

#### Defined in

src/production_indents.scailo_pb.ts:701

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionIndentsServiceItemCreateRequest`](ProductionIndentsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsServiceItemCreateRequest`](ProductionIndentsServiceItemCreateRequest.md)

#### Defined in

src/production_indents.scailo_pb.ts:705

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionIndentsServiceItemCreateRequest`](ProductionIndentsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsServiceItemCreateRequest`](ProductionIndentsServiceItemCreateRequest.md)

#### Defined in

src/production_indents.scailo_pb.ts:709
