[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest

# Class: InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest

Describes the request payload to retrieve the quantity that has already been added for the specific ref_from, ref_id and family_id

**`Generated`**

from message Scailo.InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest

## Hierarchy

- `Message`\<[`InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest`](InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md)\>

  ↳ **`InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest`**

## Table of contents

### Constructors

- [constructor](InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md#constructor)

### Properties

- [familyId](InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md#familyid)
- [refFrom](InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md#reffrom)
- [refId](InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md#refid)
- [fields](InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md#fields)
- [runtime](InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md#runtime)
- [typeName](InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md#typename)

### Methods

- [clone](InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md#clone)
- [equals](InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md#equals)
- [fromBinary](InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md#frombinary)
- [fromJson](InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md#fromjson)
- [fromJsonString](InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md#fromjsonstring)
- [getType](InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md#gettype)
- [toBinary](InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md#tobinary)
- [toJSON](InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md#tojson)
- [toJson](InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md#tojson-1)
- [toJsonString](InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md#tojsonstring)
- [equals](InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md#equals-1)
- [fromBinary](InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md#frombinary-1)
- [fromJson](InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md#fromjson-1)
- [fromJsonString](InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest**(`data?`): [`InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest`](InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest`](InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md)\> |

#### Returns

[`InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest`](InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Overrides

Message\&lt;InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest\&gt;.constructor

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1320

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The associated family ID

**`Generated`**

from field: uint64 family_id = 3;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1318

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 1;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1304

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 2;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1311

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1327

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1325

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest"``

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1326

## Methods

### clone

▸ **clone**(): [`InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest`](InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

Create a deep copy.

#### Returns

[`InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest`](InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest`](InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest`](InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest`](InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest`](InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md)\>

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
| `a` | `undefined` \| [`InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest`](InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest`](InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md)\> |
| `b` | `undefined` \| [`InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest`](InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest`](InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1345

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest`](InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest`](InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1333

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest`](InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest`](InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1337

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest`](InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest`](InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1341
