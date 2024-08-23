[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest

# Class: OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest

Describes the request payload to retrieve the quantity that has already been added for the specific ref_from, ref_id and family_id

**`Generated`**

from message Scailo.OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest

## Hierarchy

- `Message`\<[`OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest`](OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest.md)\>

  ↳ **`OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest`**

## Table of contents

### Constructors

- [constructor](OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest.md#constructor)

### Properties

- [familyId](OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest.md#familyid)
- [refFrom](OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest.md#reffrom)
- [refId](OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest.md#refid)
- [fields](OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest.md#fields)
- [runtime](OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest.md#runtime)
- [typeName](OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest.md#typename)

### Methods

- [clone](OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest.md#clone)
- [equals](OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest.md#equals)
- [fromBinary](OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest.md#frombinary)
- [fromJson](OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest.md#fromjson)
- [fromJsonString](OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest.md#fromjsonstring)
- [getType](OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest.md#gettype)
- [toBinary](OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest.md#tobinary)
- [toJSON](OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest.md#tojson)
- [toJson](OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest.md#tojson-1)
- [toJsonString](OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest.md#tojsonstring)
- [equals](OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest.md#equals-1)
- [fromBinary](OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest.md#frombinary-1)
- [fromJson](OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest.md#fromjson-1)
- [fromJsonString](OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest**(`data?`): [`OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest`](OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest`](OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest.md)\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest`](OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Overrides

Message\&lt;OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest\&gt;.constructor

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1378

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The associated family ID

**`Generated`**

from field: uint64 family_id = 3;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1376

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 1;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1362

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 2;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1369

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1385

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1383

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest"``

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1384

## Methods

### clone

▸ **clone**(): [`OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest`](OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest.md)

Create a deep copy.

#### Returns

[`OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest`](OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest`](OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest`](OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest`](OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest`](OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest.md)\>

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
| `a` | `undefined` \| [`OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest`](OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest`](OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest.md)\> |
| `b` | `undefined` \| [`OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest`](OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest`](OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1403

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest`](OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest`](OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1391

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest`](OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest`](OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1395

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest`](OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest`](OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1399
