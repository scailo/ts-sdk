[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest

# Class: InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest

Describes the parameters required to add an item to a inward job free issue material return

**`Generated`**

from message Scailo.InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest

## Hierarchy

- `Message`\<[`InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md)\>

  ↳ **`InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#constructor)

### Properties

- [clientFamilyCode](InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#clientfamilycode)
- [clientQuantity](InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#clientquantity)
- [clientUomId](InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#clientuomid)
- [familyId](InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#familyid)
- [internalQuantity](InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#internalquantity)
- [inwardJobFreeIssueMaterialReturnId](InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#inwardjobfreeissuematerialreturnid)
- [itemHash](InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#itemhash)
- [userComment](InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#usercomment)
- [fields](InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#fields)
- [runtime](InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#runtime)
- [typeName](InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#typename)

### Methods

- [clone](InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#clone)
- [equals](InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#equals)
- [fromBinary](InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#frombinary)
- [fromJson](InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#fromjson)
- [fromJsonString](InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#fromjsonstring)
- [getType](InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#gettype)
- [toBinary](InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#tobinary)
- [toJSON](InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#tojson)
- [toJson](InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#tojson-1)
- [toJsonString](InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#tojsonstring)
- [equals](InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#equals-1)
- [fromBinary](InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#frombinary-1)
- [fromJson](InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#fromjson-1)
- [fromJsonString](InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest**(`data?`): [`InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md)\> |

#### Returns

[`InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md)

#### Overrides

Message\&lt;InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest\&gt;.constructor

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:694](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L694)

## Properties

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

Stores the family code as defined by the client

**`Generated`**

from field: string client_family_code = 16;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:692](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L692)

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being dispatched in client's unit of material

**`Generated`**

from field: uint64 client_quantity = 15;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:685](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L685)

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 14;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:678](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L678)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:657](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L657)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being dispatched in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 13;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:671](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L671)

___

### inwardJobFreeIssueMaterialReturnId

• **inwardJobFreeIssueMaterialReturnId**: `bigint` = `protoInt64.zero`

Stores the inward job free issue material return ID

**`Generated`**

from field: uint64 inward_job_free_issue_material_return_id = 10;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:650](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L650)

___

### itemHash

• **itemHash**: `string` = `""`

Stores the item hash to be dispatched

**`Generated`**

from field: string item_hash = 12;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:664](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L664)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:643](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L643)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:701](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L701)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:699](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L699)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest"``

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:700](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L700)

## Methods

### clone

▸ **clone**(): [`InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md)

Create a deep copy.

#### Returns

[`InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md)\> |
| `b` | `undefined` \| [`InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:724](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L724)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md)

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:712](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L712)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md)

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:716](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L716)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest`](InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest.md)

#### Defined in

[src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:720](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs_free_issue_materials_returns.scailo_pb.ts#L720)
